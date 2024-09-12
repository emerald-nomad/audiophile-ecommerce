import { BaseEntity } from "./base-entity";
import { ImageTypeEnum } from "./enums";

export interface RelatedProductImageTable extends BaseEntity {
  related_product_id: string;
  image_type: ImageTypeEnum;
  url: string;
}
