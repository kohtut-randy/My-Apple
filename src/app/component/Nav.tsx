// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// const LINKS = [
//   {
//     id: "nav-1",
//     headlink: "/mac",
//     title: "Mac",
//     sublink: {
//       title: "",
//       subtitle: [
//         {
//           label: "hello",
//           href: "/mac-book-pro",
//         },
//         {
//           label: "hello",
//           href: "",
//         },
//       ],
//     },
//   },
// ];

// export default function App() {
//   const [open, setOpen] = useState<boolean>(false);
//   const [touchedNav, setTouchedNav] = useState<string>("");

//   const touchedNavContent = LINKS.find((link) => link.id === touchedNav);

//   return (
//     <div>
//       <nav
//         style={{
//           padding: "20px 50px",
//           background: "#eee",
//           display: "flex",
//           alignItems: "center",
//           gap: "28px",
//           position: "relative",
//           top: 0,
//           zIndex: 10,
//         }}
//       >
//         {LINKS.map((link) => {
//           return (
//             <Link
//               href={link.headlink}
//               key={link.id}
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontSize: "14px",
//               }}
//               onMouseEnter={(e) => {
//                 e.preventDefault();
//                 setOpen(true);
//                 setTouchedNav(link.id);
//               }}
//             >
//               {link.title}
//             </Link>
//           );
//         })}
//       </nav>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             exit={{ y: -120 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             style={{
//               position: "absolute",
//               // top: 0,
//               // borderBottom: "1px solid red",
//               left: 0,
//               right: 0,
//               backgroundColor: "#fff",
//               padding: "12px",
//               zIndex: 9,
//             }}
//             onMouseEnter={(e) => {
//               e.preventDefault();
//             }}
//             onMouseLeave={(e) => {
//               e.preventDefault();
//               setOpen(false);
//             }}
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               style={{
//                 letterSpacing: "0.6px",
//                 lineHeight: "1.5",
//               }}
//             >
//               {touchedNavContent?.sublink.subtitle.map((link) => (
//                 <Link href={link?.href}>{link.label}</Link>
//               ))}
//             </motion.p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
