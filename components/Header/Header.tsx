import Image from "next/image";
import {
  CartIconWrapper,
  HamburgerIconWrapper,
  HeaderWrapper,
  IconsWrapper,
  LogoIconWrapper,
  MenuItemsWrapper,
  MobileNavStyles,
  NavigationWrapper,
} from "./syled-components";
import cartIcon from "@/assets/shared/desktop/icon-cart.svg";
import hamburgerIcon from "@/assets/shared/tablet/icon-hamburger.svg";
import logoIcon from "@/assets/shared/desktop/logo.svg";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { audiophileRepository } from "@/lib/data/auidiophile-repository";
import { CategoryLinks } from "../CategoryLinks";
import { CategoryLink } from "../CategoryLinks/CategoryLink";

export async function Header() {
  const categories = await audiophileRepository.getCategories();

  return (
    <Menu>
      <MobileNavStyles />
      <HeaderWrapper>
        <IconsWrapper>
          <HamburgerIconWrapper>
            <MenuButton>
              <Image src={hamburgerIcon} alt="Toggle menu icon" />
            </MenuButton>

            <MenuItems id="mobile-nav" anchor="bottom start">
              <MenuItemsWrapper>
                {categories.map((c) => (
                  <CategoryLink
                    key={c.id}
                    {...c}
                    imageUrl={c.imageUrl!}
                    inMenu={false}
                  />
                ))}
              </MenuItemsWrapper>
            </MenuItems>
          </HamburgerIconWrapper>

          <LogoIconWrapper>
            <Link href="/">
              <Image src={logoIcon} alt="Toggle menu icon" />
            </Link>
          </LogoIconWrapper>
          <NavigationWrapper>
            <Link href="/">Home</Link>
            {categories.map((c) => (
              <Link key={c.id} href={`/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </NavigationWrapper>
          <CartIconWrapper>
            <Image src={cartIcon} alt="Toggle menu icon" />
          </CartIconWrapper>
        </IconsWrapper>
      </HeaderWrapper>
    </Menu>
  );
}
