import Image from "next/image";
import { HeroContent, HeroWrapper } from "./styled-components";
import desktopHeroImage from "@/assets/home/desktop/hero.png";

export function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>Test</h1>
      </HeroContent>
    </HeroWrapper>
  );
}
