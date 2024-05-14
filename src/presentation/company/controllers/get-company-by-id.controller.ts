import { NextFunction, Request, Response } from 'express';
import { GetCompanyByIdRepository } from '@modules/company/domain';
import { GetCompanyById } from '@modules/company/application';

export class GetCompanyByIdController {
  constructor(private readonly repository: GetCompanyByIdRepository) {}

  getCompanyById = (req: Request, res: Response, next: NextFunction) => {
    //   const companyId = req.validatedCompanyId!;
    const companyId = '1';

    return new GetCompanyById(this.repository)
      .execute(companyId)
      .then(company => res.status(200).json(company))
      .catch(error => next(error));
  };
}
