import { Kysely } from "kysely";
import {
  IMAGE_TYPE_ENUM_NAME,
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

export async function up(db: Kysely<any>): Promise<void> {
  await databaseTypesMigration.up(db);
  await categoryTableMigration.up(db);
  await categoryImageTableMigration.up(db);
  await productTableMigration.up(db);
  await productPreviewImageTableMigration.up(db);
  await productImageTableMigration.up(db);
  await productIncludedItemTableMigration.up(db);
  await productGalleryImageTableMigration.up(db);
  await relatedProductMigration.up(db);
  await relatedProductImageTableMigration.up(db);
}

export async function down(db: Kysely<any>): Promise<void> {
  await relatedProductImageTableMigration.down(db);
  await relatedProductMigration.down(db);
  await productGalleryImageTableMigration.down(db);
  await productIncludedItemTableMigration.down(db);
  await productImageTableMigration.down(db);
  await productPreviewImageTableMigration.down(db);
  await productTableMigration.down(db);
  await categoryImageTableMigration.down(db);
  await categoryTableMigration.down(db);
  await databaseTypesMigration.down(db);
}

const databaseTypesMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createType(IMAGE_TYPE_ENUM_NAME)
      .asEnum(["mobile", "tablet", "desktop"])
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropType(IMAGE_TYPE_ENUM_NAME).execute();
  },
};

const categoryTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(CATEGORY_TABLE_NAME)
      .addIdColumn()
      .addColumn("name", "text", (col) => col.unique())
      .addColumn("slug", "text", (col) => col.unique())
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(CATEGORY_TABLE_NAME).execute();
  },
};

const categoryImageTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(CATEGORY_IMAGE_TABLE_NAME)
      .addIdColumn()
      .addColumn("url", "text")
      .addColumn("category_id", "uuid")
      .addForeignKeyConstraint(
        "category_image_category_foreign",
        ["category_id"],
        CATEGORY_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(CATEGORY_IMAGE_TABLE_NAME).execute();
  },
};

const productTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(PRODUCT_TABLE_NAME)
      .addIdColumn()
      .addColumn("slug", "text", (col) => col.unique())
      .addColumn("name", "text", (col) => col.unique())
      .addColumn("new", "boolean")
      .addColumn("price", "integer")
      .addColumn("description", "text")
      .addColumn("features", "text")
      .addColumn("category_id", "uuid")
      .addForeignKeyConstraint(
        "product_category_foreign",
        ["category_id"],
        CATEGORY_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(PRODUCT_TABLE_NAME).execute();
  },
};

const productPreviewImageTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(PRODUCT_PREVIEW_IMAGE_TABLE_NAME)
      .addIdColumn()
      .addColumn("url", "text")
      .addColumn("product_id", "uuid")
      .addForeignKeyConstraint(
        "product_preview_image_product_foreign",
        ["product_id"],
        PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(PRODUCT_PREVIEW_IMAGE_TABLE_NAME).execute();
  },
};

const productImageTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(PRODUCT_IMAGE_TABLE_NAME)
      .addIdColumn()
      .addColumn("url", "text")
      .addColumn("product_id", "uuid")
      .addForeignKeyConstraint(
        "product_image_product_foreign",
        ["product_id"],
        PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(PRODUCT_IMAGE_TABLE_NAME).execute();
  },
};

const productIncludedItemTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(PRODUCT_INCLUDED_ITEM_TABLE_NAME)
      .addIdColumn()
      .addColumn("name", "text")
      .addColumn("product_id", "uuid")
      .addColumn("quantity", "integer")
      .addForeignKeyConstraint(
        "product_included_item_product_foreign",
        ["product_id"],
        PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(PRODUCT_INCLUDED_ITEM_TABLE_NAME).execute();
  },
};

const productGalleryImageTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(PRODUCT_GALLERY_IMAGE_TABLE_NAME)
      .addIdColumn()
      .addColumn("url", "text")
      .addColumn("product_id", "uuid")
      .addColumn("order", "integer")
      .addForeignKeyConstraint(
        "product_gallery_image_product_foreign",
        ["product_id"],
        PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(PRODUCT_GALLERY_IMAGE_TABLE_NAME).execute();
  },
};

const relatedProductMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(RELATED_PRODUCT_TABLE_NAME)
      .addIdColumn()
      .addColumn("name", "text")
      .addColumn("slug", "text")
      .addColumn("product_id", "uuid")
      .addForeignKeyConstraint(
        "related_product_product_foreign",
        ["product_id"],
        PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(RELATED_PRODUCT_TABLE_NAME).execute();
  },
};

const relatedProductImageTableMigration = {
  async up(db: Kysely<any>) {
    await db.schema
      .createTable(RELATED_PRODUCT_IMAGE_TABLE_NAME)
      .addIdColumn()
      .addColumn("url", "text")
      .addColumn("related_product_id", "uuid")
      .addForeignKeyConstraint(
        "related_product_image_related_product_foreign",
        ["related_product_id"],
        RELATED_PRODUCT_TABLE_NAME,
        ["id"],
      )
      .execute();
  },
  async down(db: Kysely<any>) {
    await db.schema.dropTable(RELATED_PRODUCT_IMAGE_TABLE_NAME).execute();
  },
};
