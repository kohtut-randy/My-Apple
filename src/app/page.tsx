import Image from "next/image";
import Hero from "./component/Hero";
import SimpleSlider from "./component/Caurosel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <SimpleSlider />
    </div>
  );
}
