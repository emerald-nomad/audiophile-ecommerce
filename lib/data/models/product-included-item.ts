import { BaseEntity } from "./base-entity";

export interface ProductIncludedItemTable extends BaseEntity {
  quantity: number;
  name: string;
  product_id: string;
}
