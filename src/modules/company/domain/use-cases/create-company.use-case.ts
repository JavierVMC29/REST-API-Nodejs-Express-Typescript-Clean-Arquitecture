import { CreateCompanyDto } from "../dtos";
import { Company } from "../entities";

export interface CreateCompanyUseCase {
  execute(createCompanyDto: CreateCompanyDto): Promise<Company>;
}
