import {
  Company,
  CreateCompanyDto,
  CreateCompanyRepository,
} from "../../domain";

export class CreateCompanyRepositoryImp implements CreateCompanyRepository {
  async createCompany(createCompanyDto: CreateCompanyDto) {
    const company: Company = {
      id: "1",
      ...createCompanyDto,
    };
    return new Company(company.id, company.name, company.identification);
  }
}
