"use client";

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

export function Header() {
  return (
    <Menu>
      <MobileNavStyles />
      <HeaderWrapper>
        <IconsWrapper>
          <HamburgerIconWrapper>
            <MenuButton>
              <Image src={hamburgerIcon} alt="Toggle menu icon" />
            </MenuButton>

            <MenuItems
              id="mobile-nav"
              anchor="bottom start"
              className="[--anchor-gap:4px] sm:[--anchor-gap:8px]"
            >
              <MenuItemsWrapper>
                <MenuItem>
                  <a
                    className="block data-[focus]:bg-blue-100"
                    href="/settings"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/support">
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/license">
                    License
                  </a>
                </MenuItem>
              </MenuItemsWrapper>
            </MenuItems>
          </HamburgerIconWrapper>

          <LogoIconWrapper>
            <Image src={logoIcon} alt="Toggle menu icon" />
          </LogoIconWrapper>
          <NavigationWrapper>
            <Link href="/">Home</Link>
            <Link href="/headphones">Headphones</Link>
            <Link href="/speakers">Speakers</Link>
            <Link href="/earphones">Earphones</Link>
          </NavigationWrapper>
          <CartIconWrapper>
            <Image src={cartIcon} alt="Toggle menu icon" />
          </CartIconWrapper>
        </IconsWrapper>
      </HeaderWrapper>
    </Menu>
  );
}
