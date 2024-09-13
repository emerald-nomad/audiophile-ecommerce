import {
  CATEGORY_TABLE_NAME,
  PRODUCT_TABLE_NAME,
  PRODUCT_PREVIEW_IMAGE_TABLE_NAME,
  PRODUCT_IMAGE_TABLE_NAME,
  PRODUCT_INCLUDED_ITEM_TABLE_NAME,
  PRODUCT_GALLERY_IMAGE_TABLE_NAME,
  RELATED_PRODUCT_TABLE_NAME,
  RELATED_PRODUCT_IMAGE_TABLE_NAME,
  CATEGORY_IMAGE_TABLE_NAME,
} from "../table-names";
import { CategoryTable } from "./category";
import { CategoryImage } from "./category-image";
import { ProductTable } from "./product";
import { ProductGalleryImageTable } from "./product-gallery-image";
import { ProductImageTable } from "./product-image";
import { ProductIncludedItemTable } from "./product-included-item";
import { ProductPreviewImageTable } from "./product-preview-image";
import { RelatedProductTable } from "./related-product";
import { RelatedProductImageTable } from "./related-product-image";

export interface Database {
  [CATEGORY_TABLE_NAME]: CategoryTable;
  [CATEGORY_IMAGE_TABLE_NAME]: CategoryImage;
  [PRODUCT_TABLE_NAME]: ProductTable;
  [PRODUCT_PREVIEW_IMAGE_TABLE_NAME]: ProductPreviewImageTable;
  [PRODUCT_IMAGE_TABLE_NAME]: ProductImageTable;
  [PRODUCT_INCLUDED_ITEM_TABLE_NAME]: ProductIncludedItemTable;
  [PRODUCT_GALLERY_IMAGE_TABLE_NAME]: ProductGalleryImageTable;
  [RELATED_PRODUCT_TABLE_NAME]: RelatedProductTable;
  [RELATED_PRODUCT_IMAGE_TABLE_NAME]: RelatedProductImageTable;
}
