import Image from "next/image";
import { CategoryLinkContainer } from "./styled-components";
import Link from "next/link";
import RightArrowIcon from "@/assets/shared/desktop/icon-arrow-right.svg";
import { MenuItem } from "@headlessui/react";

interface CategoryLinkProps {
  name: string;
  slug: string;
  imageUrl: string;
  inMenu?: boolean;
}

export async function CategoryLink(props: CategoryLinkProps) {
  return (
    <CategoryLinkContainer>
      <Image src={props.imageUrl} width={175} height={175} alt="" />
      <span className="category-name">{props.name}</span>
       <a href={`/${props.slug}`} className="category-link">
          Shop <Image src={RightArrowIcon} alt="" />
        </a>
    </CategoryLinkContainer>
  );
}
