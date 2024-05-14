import { Router } from 'express';

import container from './dependency-injection';

export class CompanyRoutes {
  static get routes(): Router {
    const router = Router();

    const getCompanyByIdController = container.get('Company.controllers.GetCompanyByIdController');

    router.get('/:id', getCompanyByIdController.getCompanyById);

    const createCompanyController = container.get('Company.controllers.CreateCompanyController');

    router.post('/', createCompanyController.createCompany);

    return router;
  }
}
