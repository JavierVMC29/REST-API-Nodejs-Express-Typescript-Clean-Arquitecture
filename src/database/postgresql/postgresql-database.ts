import { DataSource } from 'typeorm';
import { envs } from '../../config';

interface Options {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const isDevelopment = envs.NODE_ENV === 'dev';

export class PostgresqlDatabase {
  static myDataSource: DataSource;

  static async connect(options: Options) {
    const { type, host, port, username, password, database } = options;

    try {
      this.myDataSource = new DataSource({
        type,
        host,
        port,
        username,
        password,
        database,
        synchronize: true,
        entities: [
          isDevelopment
            ? './src/database/postgresql/models/*.model.ts'
            : './dist/database/postgresql/models/*.model.js',
        ],

        migrations: [
          isDevelopment ? './src/database/postgresql/migrations/*.ts' : './dist/database/postgresql/migrations/*.js',
        ],
        subscribers: [],
      });

      console.log('\nPostgreSQL connected');
      await this.myDataSource.initialize();
      return this.myDataSource;
    } catch (error) {
      console.log('-> PostgreSQL connection error');
      throw error;
    }
  }
}
