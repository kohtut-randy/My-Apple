"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroData = [
  {
    img: "https://www.apple.com/v/macbook-pro/an/images/overview/welcome/welcome_hero_endframe__c61x1mv7kgqe_large.jpg",
    title: "MacBook Pro",
    text: "Hello Apple Intelligence",
  },
  {
    img: "https://www.apple.com/v/ipad-pro/ar/images/overview/hero/hero_endframe__sg50vzdd6sqm_large.jpg",
    title: "I Pad Pro",
    text: "Thinpossible",
  },
  {
    img: "https://www.apple.com/v/home/bz/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_mediumtall.jpg",
    title: "I Phone 16 Pro",
    text: "Hello Apple Intelligence",
  },
];
const HeroData2 = [
  {
    img: "https://www.apple.com/v/home/bz/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg",
    title: "Trade In",
    text: "Hello Apple Intelligence",
  },
  {
    img: "https://www.apple.com/v/home/bz/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg",
    title: "I Watch",
    text: "Think Possible",
  },
  {
    img: "https://www.apple.com/v/home/bz/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg",
    title: "Macbook Air",
    text: "Hello Apple Intelligence",
  },
  {
    img: "https://www.apple.com/v/home/bz/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium.jpg",
    title: "Apple Gift Card",
    text: "Get Up 30% Daily Cash Back",
  },
];
export default function Hero() {
  return (
    <div className="flex flex-col gap-4 bg-white">
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        {HeroData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-black"
          >
            <div
              className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" flex flex-col justify-center items-center"
              >
                <p className="text-5xl text-white ">{item.title}</p>
                <p className="text-2xl pt-2 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  {item.text}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex gap-10 mt-5"
                >
                  <Link href="/details/mac">
                    <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                      Learn More
                    </p>
                  </Link>

                  <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                    Buy
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              src={item.img}
              className="w-[1800px] h-[75vh]"
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4">
        {HeroData2.map((item, index) => (
          <figure
            className="relative col-span-1 flex align-center justify-center"
            key={index}
          >
            <Image
              src={item.img}
              alt={item.title}
              className=" w-[100%] h-[580px] rounded-lg"
              width={1000}
              height={1000}
            />
            <figcaption className="absolute flex flex-col top-4 left-0 right-0 bg-black bg-transparent text-black text-lg font-bold p-2 text-center">
              <span> {item.title}</span>
              <span> {item.text}</span>

              <div className="flex align-center justify-center gap-5 mt-6">
                <Link href="/details/mac">
                  <p className="text-lg font-medium text-blue-500 hover:underline cursor-pointer">
                    Learn More
                  </p>
                </Link>

                <p className="text-lg font-medium text-white hover:underline cursor-pointer bg-blue-500 w-[100px] rounded-full">
                  Buy
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
