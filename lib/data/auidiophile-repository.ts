import { cache } from "react";
import { db } from "./db";

export const audiophileRepository = {
  getCategories: cache(async function () {
    const categories = await db
      .selectFrom("category")
      .innerJoin("category_image", "category.id", "category_image.category_id")
      .select(['category.id', 'category.name', 'category.slug', 'category_image.url as imageUrl'])
      .execute();

    return categories;
  }),
};
