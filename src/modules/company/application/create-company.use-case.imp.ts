import {
  Company,
  CreateCompanyDto,
  CreateCompanyRepository,
  CreateCompanyUseCase,
} from "../domain";

export class CreateCompany implements CreateCompanyUseCase {
  constructor(private readonly repository: CreateCompanyRepository) {}

  async execute(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.repository.createCompany(createCompanyDto);

    if (!company) {
      // throw error
    }

    return company;
  }
}
