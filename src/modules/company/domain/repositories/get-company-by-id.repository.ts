import { Company } from "../entities";

export interface GetCompanyByIdRepository {
  getCompanyById(id: string): Promise<Company>;
}
