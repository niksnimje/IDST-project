// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   "/hero/hero1.jpg",
//   "/hero/hero2.jpg",
//   "/hero/hero3.jpg",
//   "/hero/hero4.jpg",
// ];

// const HeroSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // 🔁 Auto slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-[#e5ded4]">
//       {/* OUTER BORDER */}
//       <div className="relative w-[92%] h-[85vh] border border-black flex items-center justify-center">
        
//         {/* IMAGE FRAME */}
//         <div className="relative w-[70%] h-[75%] overflow-hidden border border-black">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={images[activeIndex]}
//                 alt="Hero Image"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* SLIDER NUMBERS (Desktop only) */}
//         <div className="absolute bottom-6 right-8 hidden md:flex gap-6 text-sm tracking-widest">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`transition-opacity duration-300 ${
//                 activeIndex === index ? "opacity-100" : "opacity-40"
//               }`}
//             >
//               {String(index + 1).padStart(2, "0")}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react'

function HeroSection() {
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection