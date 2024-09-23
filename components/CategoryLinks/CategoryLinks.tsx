import { audiophileRepository } from "@/lib/data/auidiophile-repository";
import { CategoryLinksContainer } from "./styled-components";
import { CategoryLink } from "./CategoryLink";

export async function CategoryLinks() {
  const categories = await audiophileRepository.getCategories();
  
  return <CategoryLinksContainer>
    {categories.map(c => <CategoryLink key={c.id} {...c} imageUrl={c.imageUrl!} />)}
  </CategoryLinksContainer>
}

