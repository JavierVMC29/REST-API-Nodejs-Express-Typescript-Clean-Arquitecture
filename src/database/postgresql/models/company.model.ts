import { Entity, Column } from 'typeorm';
import { BaseModel } from './base.model';

@Entity({ name: 'companies' })
export class CompanyModel extends BaseModel {
  @Column()
  name!: string;

  @Column()
  identification!: string;
}
