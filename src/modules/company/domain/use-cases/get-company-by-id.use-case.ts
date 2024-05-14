import { Company } from "../entities";

export interface GetCompanyByIdUseCase {
  execute(id: string): Promise<Company>;
}
