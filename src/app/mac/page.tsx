import { div } from "framer-motion/client";
import Link from "next/link";

export default function Mac() {
  return (
    <div className="bg-red-200">
      <div className="flex flex-row items-center justify-center gap-4">
        <ul className="flex flex-row items-center justify-center gap-4 bg-white text-black">
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link
              href={"/mac/macbook-pro"}
              className="flex flex-col items-center justify-center"
            >
              <img
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg"
                alt=""
              />
            </Link>
            <p className="text-align-center">MacBook Air</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <img
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg"
                alt=""
              />
            </Link>
            <p>MacBook Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <img
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/imac_light__cx5ex9nbqxme_large.svg"
                alt=""
              />
            </Link>
            <p>I Mac</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <img
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg"
                alt=""
              />
            </Link>
            <p>Mac Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <img
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/displays_light__d67yrnk0qsa6_large.svg"
                alt=""
              />
            </Link>
            <p className="text-align-center">Displays</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
