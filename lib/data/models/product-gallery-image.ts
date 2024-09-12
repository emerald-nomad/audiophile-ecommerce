import { BaseEntity } from "./base-entity";
import { ImageTypeEnum } from "./enums";

export interface ProductGalleryImageTable extends BaseEntity {
  product_id: string;
  image_type: ImageTypeEnum;
  url: string;
  order: number;
}
