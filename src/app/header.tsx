"use client";
import Link from "next/link";
// import { BsApple } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const LINKS = [
  {
    id: "nav-1",
    headlink: "/",
    img: "",
    title: "Apple",
    sublink: {
      title: "",
      subtitle: [],
    },
  },
  {
    id: "nav-2",
    headlink: "/store",
    img: "",
    title: "Store",
    sublink: {
      title: "",
      subtitle: [
        {
          label: "Shop",
          href: "/shop",
        },
        {
          label: "Mac",
          href: "/buy Mac",
        },
      ],
    },
  },
  {
    id: "nav-3",
    headlink: "/mac",
    img: "",
    title: "Mac",
    sublink: {
      title: "",
      subtitle: [
        {
          label: "Mac Book Pro",
          href: "/mac-book-pro",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
        {
          label: "Mac Book Air",
          href: "/mac-book-air",
        },
      ],
    },
  },
];
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [touchedNav, setTouchedNav] = useState<string>("");
  const touchedNavContent = LINKS.find((link) => link.id === touchedNav);
  return (
    <div>
      <nav
        style={{
          padding: "20px 300px",
          background: "#eee",
          display: "flex",
          alignItems: "center",
          gap: "28px",
          position: "relative",
          top: 0,
          zIndex: 10,
        }}
      >
        {LINKS.map((link) => {
          return (
            <Link
              href={link.headlink}
              key={link.id}
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "14px",
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                setOpen(true);
                setTouchedNav(link.id);
              }}
            >
              {link.title} {link.img}
            </Link>
          );
        })}
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="h-auto pb-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "absolute",
              // top: 0,
              // borderBottom: "1px solid red",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              zIndex: 9,
            }}
            onMouseEnter={(e) => {
              e.preventDefault();
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                letterSpacing: "0.6px",
                lineHeight: "1.5",
              }}
              className="flex flex-col item-center justify-center text-black"
            >
              {touchedNavContent?.sublink.subtitle.map((link, idx) => (
                <Link href={link?.href} key={idx}>
                  {link.label}
                </Link>
              ))}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <header className="sticky top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-100 bg-transparent">
  //     <div className="container mx-auto flex justify-between lg:gap-5 font-thin text-sm items-center flex-wrap bg-transparent text-black px-20">
  //       <Link href="/">
  //         <BsApple className="text-lg" />
  //       </Link>

  //       <Link href="/store">Store</Link>
  //       <Link href="/mac">Mac</Link>
  //       <Link href="/about">Ipad</Link>
  //       <Link href="/iphone">Iphone</Link>
  //       <Link href="/about">Watch</Link>
  //       <Link href="/about">AirPods</Link>
  //       <Link href="/about">Tv & Home</Link>
  //       <Link href="/about">Entertainment</Link>
  //       <Link href="/about">Accessories</Link>
  //       <Link href="/about">Support</Link>
  //       <Link href="/about">
  //         {/* <BiSearch className="text-lg" /> */}
  //         search
  //       </Link>
  //       <Link href="/about">
  //         {/* <HiOutlineShoppingBag className="text-lg" /> */}
  //         Shop
  //       </Link>
  //     </div>
  //   </header>
  // );
};

export default Header;
