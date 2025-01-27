import Link from "next/link";
import Image from "next/image";
import AutoPlay from "../component/cardslide";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../component/Dialog";
const Data = [
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_intelligence__esfi0qmvis6e_medium.jpg",
    content: {
      body: [
        {
          text: "Supercharged by Apple silicon. Apple silicon brings game-changing power and speed to Mac. It integrates the CPU, GPU, and Neural Engine onto a single power-efficient chip, accelerating everything you do. And it makes it possible for the incredible AI performance on Mac to boost your creativity and productivity.",
          img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_01__slniatu7x8yi_large.jpg",
        },
        {
          text: "Supercharged by Apple silicon. Apple silicon brings game-changing power and speed to Mac. It integrates the CPU, GPU, and Neural Engine onto a single power-efficient chip, accelerating everything you do. And it makes it possible for the incredible AI performance on Mac to boost your creativity and productivity.",
          img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_01__slniatu7x8yi_large.jpg",
        },
      ],
    },
  },
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_medium.jpg",
  },
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_iphone__gh1tblkt6bqm_small_2x.jpg",
  },
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_small_2x.jpg",
  },
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_durability__epiwcuk7zkeq_small_2x.jpg",
  },
  {
    img: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_values__c9gck9qi4kia_small_2x.jpg",
  },
];
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
                width={1000}
                height={1000}
                className="w-[30px]"
              />
            </Link>
            <p className="text-align-center">MacBook Air</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-[30px]"
              />
            </Link>
            <p>MacBook Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/imac_light__cx5ex9nbqxme_large.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-[30px]"
              />
            </Link>
            <p>I Mac</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-[30px]"
              />
            </Link>
            <p>Mac Pro</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 mt-10">
            <Link href={"/mac/macbook-pro"}>
              <Image
                src="https://www.apple.com/v/mac/home/cb/images/chapternav/displays_light__d67yrnk0qsa6_large.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-[30px]"
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
        <AutoPlay>
          {Data.map((item, index) => (
            <div key={index} className="w-[80%]">
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={item.img}
                    alt=""
                    className=" w-[450px] h-[650px] rounded-xl mx-4 bg-contain"
                    width={1000}
                    height={1000}
                  />
                </DialogTrigger>
                <DialogContent className="flex flex-col items-center justify-center bg-white text-black border border-red-300">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  {item?.content?.body.map((item, index) => (
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        key={index}
                        src={item.img}
                        alt=""
                        className=" w-[1000px] h-auto rounded-xl mx-4 bg-contain"
                        width={1000}
                        height={1000}
                      />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </AutoPlay>
      </div>
    </div>
  );
}
