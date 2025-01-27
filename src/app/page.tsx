import Hero from "./component/Hero";
import { SimpleSlider } from "./component/Caurosel";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <SimpleSlider />
      <Footer />
    </div>
  );
}
