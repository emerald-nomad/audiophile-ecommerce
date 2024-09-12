import { BaseEntity } from "./base-entity";

export interface RelatedProductTable extends BaseEntity {
  name: string;
  slug: string;
  product_id: string;
}
