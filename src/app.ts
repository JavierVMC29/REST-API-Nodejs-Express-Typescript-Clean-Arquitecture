import 'reflect-metadata';

import { envs } from './config/envs';

import { AppRoutes } from './presentation/routes';

import { Server } from './server';

import { PostgresqlDatabase } from './database/postgresql/postgresql-database';

function setupErrorHandling() {
  process.on('uncaughtException', err => {
    console.error('[x] Uncaught Exception:', err);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('[x] Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });

  process.on('SIGTERM', () => {
    console.error('[x] Received SIGTERM. Exiting...');
    process.exit(1);
  });
}

async function startServer() {
  try {
    const server = new Server({ port: envs.PORT, routes: AppRoutes.routes });
    server.start();
  } catch (error) {
    console.error('[x] Error starting http server: ', error);
    process.exit(1);
  }
}

async function connectToDB() {
  try {
    await PostgresqlDatabase.connect({
      type: 'postgres',
      database: envs.POSTGRES_DB_NAME,
      host: envs.POSTGRES_DB_HOST,
      port: envs.POSTGRES_DB_PORT,
      username: envs.POSTGRES_DB_USERNAME,
      password: envs.POSTGRES_DB_PASSWORD,
    });
  } catch (error) {
    console.error('[x] Error to connect db: ', error);
    process.exit(1);
  }
}

async function main() {
  setupErrorHandling();

  await connectToDB();

  startServer();
}

(() => {
  main();
})();
