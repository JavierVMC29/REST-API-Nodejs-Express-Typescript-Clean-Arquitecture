import {
  Company,
  GetCompanyByIdRepository,
  GetCompanyByIdUseCase,
} from "../domain";

export class GetCompanyById implements GetCompanyByIdUseCase {
  constructor(private readonly repository: GetCompanyByIdRepository) {}

  async execute(id: string): Promise<Company> {
    const company = await this.repository.getCompanyById(id);

    if (!company) {
      // throw error
    }

    return company;
  }
}
