import data from "./data.json";
import { ImageTypeEnum } from "../models/enums";
import { db } from "../db";

async function main() {
  const categories = await db
    .insertInto("category")
    .values([
      { name: "earphones", slug: "earphones" },
      { name: "headphones", slug: "headphones" },
      { name: "speakers", slug: "speakers" },
    ])
    .returningAll()
    .execute();

  function findCategoryIdByName(name: string) {
    return categories.find((c) => (c.name = name))!.id;
  }

  // Category Image
  await db
    .insertInto("category_image")
    .values([
      {
        category_id: findCategoryIdByName("earphones"),
        url: "/images/shared/desktop/image-category-thumbnail-earphones.png",
      },
      {
        category_id: findCategoryIdByName("headphones"),
        url: "/images/shared/desktop/image-category-thumbnail-headphones.png",
      },
      {
        category_id: findCategoryIdByName("speakers"),
        url: "/images/shared/desktop/image-category-thumbnail-speakers.png",
      },
    ])
    .execute();

  for (const item of data) {
    // Product
    const product = await db
      .insertInto("product")
      .values({
        category_id: findCategoryIdByName(item.category),
        description: item.description,
        features: item.features,
        name: item.name,
        new: item.new,
        price: item.price,
        slug: item.slug,
      })
      .returningAll()
      .executeTakeFirst();

    // Product images
    const productImages = [];
    let imageType: keyof typeof item.image;
    for (imageType in item.image) {
      const image_type =
        imageType === "mobile"
          ? ImageTypeEnum.Mobile
          : imageType === "tablet"
            ? ImageTypeEnum.Tablet
            : ImageTypeEnum.Desktop;

      const url = item.image[imageType].replace("./assets", "/images");

      productImages.push({
        product_id: product!.id,
        image_type,
        url,
      });
    }
    await db.insertInto("product_image").values(productImages).execute();

    // Product preview images
    const productPreviewImages = [];
    let previewImageType: keyof typeof item.categoryImage;
    for (previewImageType in item.categoryImage) {
      const image_type =
        previewImageType === "mobile"
          ? ImageTypeEnum.Mobile
          : previewImageType === "tablet"
            ? ImageTypeEnum.Tablet
            : ImageTypeEnum.Desktop;

      const url = item.image[previewImageType].replace("./assets", "/images");

      productPreviewImages.push({
        product_id: product!.id,
        image_type,
        url,
      });
    }
    await db
      .insertInto("product_preview_image")
      .values(productPreviewImages)
      .execute();

    // Product included items
    await db
      .insertInto("product_included_item")
      .values(
        item.includes.map((i) => ({
          product_id: product!.id,
          name: i.item,
          quantity: i.quantity,
        })),
      )
      .execute();

    // Related products
    for (const other of item.others) {
      const relatedProduct = await db
        .insertInto("related_product")
        .values({
          name: other.name,
          slug: other.slug,
          product_id: product!.id,
        })
        .returningAll()
        .executeTakeFirst();

      // Related product images
      const relatedProductImages = [];
      let relatedProductImageType: keyof typeof other.image;
      for (relatedProductImageType in other.image) {
        const image_type =
          relatedProductImageType === "mobile"
            ? ImageTypeEnum.Mobile
            : relatedProductImageType === "tablet"
              ? ImageTypeEnum.Tablet
              : ImageTypeEnum.Desktop;

        const url = other.image[relatedProductImageType].replace(
          "./assets",
          "/images",
        );

        relatedProductImages.push({
          related_product_id: relatedProduct!.id,
          image_type,
          url,
        });
      }
      await db
        .insertInto("related_product_image")
        .values(relatedProductImages)
        .execute();
    }

    // Gallery images
    const galleryImages = [];
    let galleryImageOrder: keyof typeof item.gallery;
    for (galleryImageOrder in item.gallery) {
      let order =
        galleryImageOrder === "first"
          ? 1
          : galleryImageOrder === "second"
            ? 2
            : 3;

      let galleryImageType: keyof (typeof item.gallery)[typeof galleryImageOrder];
      for (galleryImageType in item.gallery[galleryImageOrder]) {
        const image_type =
          galleryImageType === "mobile"
            ? ImageTypeEnum.Mobile
            : galleryImageType === "tablet"
              ? ImageTypeEnum.Tablet
              : ImageTypeEnum.Desktop;

        const url = item.gallery[galleryImageOrder][galleryImageType].replace(
          "./assets",
          "/images",
        );

        galleryImages.push({
          product_id: product!.id,
          order,
          image_type,
          url,
        });
      }
    }

    await db
      .insertInto("product_gallery_image")
      .values(galleryImages)
      .execute();
  }
}

main();
