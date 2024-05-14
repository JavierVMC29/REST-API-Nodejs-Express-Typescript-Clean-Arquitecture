import pino from 'pino';
import { envs } from '../envs';

export class Logger {
  private readonly logger: any;

  constructor() {
    const options =
      envs.NODE_ENV === 'dev'
        ? {
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
              },
            },
          }
        : undefined;

    this.logger = pino(options);
  }

  showError(error: Error): void {
    this.logger.error(error);
  }

  showInfo(message: string): void {
    this.logger.info(message);
  }
}
