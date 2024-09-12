import { Kysely, sql } from "kysely";
import {
  PRODUCT_GALLERY_IMAGE_TABLE_NAME,
  PRODUCT_IMAGE_TABLE_NAME,
  PRODUCT_PREVIEW_IMAGE_TABLE_NAME,
  RELATED_PRODUCT_IMAGE_TABLE_NAME,
} from "../table-names";

const tablesToAddColumn = [
  PRODUCT_GALLERY_IMAGE_TABLE_NAME,
  PRODUCT_IMAGE_TABLE_NAME,
  PRODUCT_PREVIEW_IMAGE_TABLE_NAME,
  RELATED_PRODUCT_IMAGE_TABLE_NAME,
];

export async function up(db: Kysely<any>): Promise<void> {
  for await (const tableName of tablesToAddColumn) {
    await db.schema
      .alterTable(tableName)
      .addColumn("image_type", sql`audiophile."ImageType"`)
      .execute();
  }
}

export async function down(db: Kysely<any>): Promise<void> {
  for await (const tableName of tablesToAddColumn) {
    await db.schema.alterTable(tableName).dropColumn("image_type").execute();
  }
}
