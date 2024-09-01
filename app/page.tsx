import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>manrope</h1>
      <div className="overline">Testing</div>
      <Button type="filled">See Product</Button>
      <Button type="outline">See Product</Button>
      <Button type="clear">See Product</Button>
    </main>
  );
}
