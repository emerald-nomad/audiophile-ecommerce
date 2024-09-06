import Image from "next/image";
import { HeroContent, HeroWrapper } from "./styled-components";
import desktopHeroImage from "@/assets/home/desktop/hero.png";
import { Button } from "../Button";
import Link from "next/link";

export function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <p className="subtext">New Product</p>
        <p className="product-name">XX99 Mark II HeadphoneS</p>
        <p className="product-description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button type="filled" as={Link} href="/headphones">
          See Product
        </Button>
      </HeroContent>
    </HeroWrapper>
  );
}
