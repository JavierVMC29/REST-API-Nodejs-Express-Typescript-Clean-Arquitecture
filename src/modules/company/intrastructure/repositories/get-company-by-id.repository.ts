import { Company, GetCompanyByIdRepository } from "../../domain";

export class GetCompanyByIdRepositoryImp implements GetCompanyByIdRepository {
  async getCompanyById(id: string) {
    const company: Company = {
      id: id,
      name: "",
      identification: "",
    };
    return new Company(company.id, company.name, company.identification);
  }
}
