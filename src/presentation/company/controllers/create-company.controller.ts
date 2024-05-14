import { NextFunction, Request, Response } from 'express';
import { CreateCompanyDto, CreateCompanyRepository } from '@modules/company/domain';

import { CreateCompany } from '@modules/company/application';

export class CreateCompanyController {
  constructor(private readonly repository: CreateCompanyRepository) {}

  createCompany = (req: Request, res: Response, next: NextFunction) => {
    //   const companyId = req.body!;
    const createCompanyDto: CreateCompanyDto = {
      identification: '',
      name: '',
    };

    return new CreateCompany(this.repository)
      .execute(createCompanyDto)
      .then(company => res.status(200).json(company))
      .catch(error => next(error));
  };
}
