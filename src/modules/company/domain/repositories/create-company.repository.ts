import { CreateCompanyDto } from "../dtos";
import { Company } from "../entities";

export interface CreateCompanyRepository {
  createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
}
