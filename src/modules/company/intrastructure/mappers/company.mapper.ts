import { Company, CompanyDto } from "../../domain";

export class CompanyMapper {
  // static companyEntityFromObject(object: { [key: string]: any }) {
  //   const { id, _id, name, identification } = object;
  // //   if (!_id && !id) throw CustomError.badRequest(ERROR_CODES.C0012);
  // //   if (!name) throw CustomError.badRequest(ERROR_CODES.C0075);
  // //   if (!identification) throw CustomError.badRequest(ERROR_CODES.C0076);
  //   return new Company(_id || id, name, identification);
  // }
  // static companyDtoFromCompany(company: Company): CompanyDto {
  //     const { id, name, identification } = company;
  //   //   if (!_id && !id) throw CustomError.badRequest(ERROR_CODES.C0012);
  //   //   if (!name) throw CustomError.badRequest(ERROR_CODES.C0075);
  //   //   if (!identification) throw CustomError.badRequest(ERROR_CODES.C0076);
  //     return ;
  //   }
}
