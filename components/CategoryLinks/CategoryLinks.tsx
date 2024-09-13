import { audiophileRepository } from "@/lib/data/auidiophile-repository";

export async function CategoryLinks() {
  const categories = await audiophileRepository.getCategories();
  console.log(categories)
  return <h1>CategoryLinks</h1>;
}
