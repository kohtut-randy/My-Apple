import Link from "next/link";
import { BsApple } from "react-icons/bs";
const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-100 bg-transparent">
      <div className="container mx-auto flex justify-between lg:gap-5 font-thin text-sm items-center flex-wrap bg-transparent text-black px-20">
        <Link href="/">
          <BsApple className="text-lg" />
        </Link>

        <Link href="/store">Store</Link>
        <Link href="/mac">Mac</Link>
        <Link href="/about">Ipad</Link>
        <Link href="/iphone">Iphone</Link>
        <Link href="/about">Watch</Link>
        <Link href="/about">AirPods</Link>
        <Link href="/about">Tv & Home</Link>
        <Link href="/about">Entertainment</Link>
        <Link href="/about">Accessories</Link>
        <Link href="/about">Support</Link>
        <Link href="/about">
          {/* <BiSearch className="text-lg" /> */}
          search
        </Link>
        <Link href="/about">
          {/* <HiOutlineShoppingBag className="text-lg" /> */}
          Shop
        </Link>
      </div>
    </header>
  );
};

export default Header;
