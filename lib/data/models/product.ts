import { BaseEntity } from "./base-entity";

export interface ProductTable extends BaseEntity {
  slug: string;
  name: string;
  category_id: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
}
