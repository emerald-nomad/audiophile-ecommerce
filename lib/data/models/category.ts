import { BaseEntity } from "./base-entity";

export interface CategoryTable extends BaseEntity {
  name: string;
  slug: string;
}
