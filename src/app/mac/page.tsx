import Link from "next/link";
import Image from "next/image";

export default function Mac() {
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-center gap-4 ">
        <ul className="flex flex-row items-center justify-center gap-4 bg-white text-black px-10 w-full">
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link
              href={"/mac/macbook-pro"}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg"
                alt=""
              />
            </Link>
            <p className="text-align-center">MacBook Air</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg"
                alt=""
              />
            </Link>
            <p>MacBook Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/imac_light__cx5ex9nbqxme_large.svg"
                alt=""
              />
            </Link>
            <p>I Mac</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg"
                alt=""
              />
            </Link>
            <p>Mac Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/displays_light__d67yrnk0qsa6_large.svg"
                alt=""
              />
            </Link>
            <p className="text-align-center">Displays</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col align-center-justify-center w-full bg-blue-3000 mt-6">
        <div className="flex align-center justify-between text-black">
          <h1 className="text-[100px] ">Mac</h1>
          <p className="text-[40px] flex flex-col">
            If you can dream it, Mac can do it. <span>Mac can do it.</span>
          </p>
        </div>
        <video
          autoPlay
          controls
          loop
          src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge_2x.mp4"
        ></video>
      </div>
      <div>
        <h1 className="text-[50px]">Get To Know Mac.</h1>
      </div>
    </div>
  );
}
