import express, { Router } from 'express';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import * as http from 'http';

import { envs } from './config';
import { globalErrorHandler } from './presentation/middlewares';

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  private readonly app: express.Express;
  private readonly port: number;
  private readonly routes: Router;
  private httpServer?: http.Server;

  constructor(option: Options) {
    const { port = 5000, routes } = option;

    this.port = port;
    this.routes = routes;

    this.app = express();
  }

  async start(): Promise<void> {
    // global middlewares
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    this.app.use(compress());
    this.app.use(cookieParser());
    this.app.use(helmet());

    if (envs.NODE_ENV === 'dev') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('combined'));
    }

    // all routes
    this.app.use(this.routes);

    // global error hanlder
    this.app.use(globalErrorHandler);

    // start server listen
    await this.listen();
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.app.listen(this.port, () => {
        console.log(`\nApplication is running at http://localhost:${this.port} in ${envs.NODE_ENV} mode`);

        console.log('\n Press CTRL-C to stop\n');

        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }

          return resolve();
        });
      }

      return resolve();
    });
  }

  gethttpServer() {
    return this.httpServer;
  }
}
