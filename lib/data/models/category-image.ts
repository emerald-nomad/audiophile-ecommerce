import { BaseEntity } from "./base-entity";

export interface CategoryImage extends BaseEntity {
  category_id: string;
  url: string;
}
