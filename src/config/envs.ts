import dotenv from 'dotenv';
import path from 'path';
import { get } from 'env-var';

const loadEnvironmentConfig = (): void => {
  const environment = process.env.NODE_ENV ?? 'dev';

  let envFileName = '.env.development';

  if (environment === 'production') envFileName = '.env';
  else if (environment === 'test') envFileName = '.env.test';

  let envFilePath = path.resolve(process.cwd(), envFileName);

  if (environment === 'production') envFilePath = path.resolve(process.cwd(), 'dist', envFileName);

  const result = dotenv.config({ path: envFilePath });

  if (result.error) {
    console.error(`-> Error loading ${envFileName}:`, result.error);
    process.exit(1);
  }

  console.log(`\nFile ${envFileName} loaded successfully`);
};

loadEnvironmentConfig();

export const envs = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: get('PORT').required().asPortNumber(),

  // Postgres
  POSTGRES_DB_NAME: get('POSTGRES_DB_NAME').required().asString(),
  POSTGRES_DB_HOST: get('POSTGRES_DB_HOST').required().asString(),
  POSTGRES_DB_PORT: get('POSTGRES_DB_PORT').required().asPortNumber(),
  POSTGRES_DB_USERNAME: get('POSTGRES_DB_USERNAME').required().asString(),
  POSTGRES_DB_PASSWORD: get('POSTGRES_DB_PASSWORD').required().asString(),
};
