import { Router, Request, Response } from 'express';
import { CompanyRoutes } from './company/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Company routes
    router.use('/api/companies', CompanyRoutes.routes);

    // Other routes
    // ...
    // ...
    // ...

    router.use((req: Request, res: Response) => {
      return res.status(404).json({
        message: 'Endpoint not found',
      });
    });

    return router;
  }
}
