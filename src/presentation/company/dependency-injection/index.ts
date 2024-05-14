import { ContainerBuilder, Reference } from 'node-dependency-injection';

import { CreateCompanyController, GetCompanyByIdController } from '../controllers';

import { CreateCompany, GetCompanyById } from '@modules/company/application';

import { CreateCompanyRepositoryImp, GetCompanyByIdRepositoryImp } from '@modules/company/intrastructure';

const container = new ContainerBuilder();

// GetCompanyById

container.register('Company.domain.GetCompanyByIdRepository', GetCompanyByIdRepositoryImp);
container.register('Company.application.GetCompanyById', GetCompanyById);
container
  .register('Company.controllers.GetCompanyByIdController', GetCompanyByIdController)
  .addArgument(new Reference('Company.application.GetCompanyById'));

// CreateCompany

container.register('Company.domain.CreateCompanyRepository', CreateCompanyRepositoryImp);
container.register('Company.application.CreateCompany', CreateCompany);
container
  .register('Company.controllers.CreateCompanyController', CreateCompanyController)
  .addArgument(new Reference('Company.application.CreateCompany'));

export default container;
