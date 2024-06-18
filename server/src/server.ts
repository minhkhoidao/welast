import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import RepoRoutes from './routes/repos.route';

dotenv.config({ path: '.env' });

const configureMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
};

const configureRoutes = (app: Express) => {
  app.use('/repos', RepoRoutes);
};

const startServer = (app: Express, port: string | number) => {
  const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

  process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged error: ${err}`);
    server.close(() => process.exit(1));
  });
};

const createServer = () => {
  const app = express();
  const port = process.env.PORT ?? 3000;

  configureMiddleware(app);
  configureRoutes(app);
  startServer(app, port);
};

createServer();
