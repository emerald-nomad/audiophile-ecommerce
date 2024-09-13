import { cache } from "react";
import { db } from "./db";

export const audiophileRepository = {
  getCategories: cache(async function () {
    const categories = await db
      .selectFrom("category")
      .leftJoin("category_image", "category.id", "category_image.category_id")
      .select(['category.id as id', 'category.name as name', 'category.slug as slug', 'category_image.url as imageUrl'])
      .execute();

    return categories;
  }),
};
