import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
      <h2 className="text-center pt-12 text-[12vw] font-black text-gray-400 md:text-[100px]">
        Other works<span className="text-pink-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative z-10 w-full h-full">
      {cardsData.map((card, i) => (
        <Card key={i} {...card} containerRef={containerRef} />
      ))}
    </div>
  );
};

const cardsData = [
  {
    src: "./public/misc/frog.jpg",
    alt: "Image 1",
    rotate: "6deg",
    top: "20%",
    left: "25%",
    className: "w-32 sm:w-40 md:w-56",
  },
  {
    src: "./public/misc/flower.jpg",
    alt: "Image 2",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-28 sm:w-36 md:w-48",
  },
  {
    src: "./public/misc/kaali.jpg",
    alt: "Image 3",
    rotate: "-6deg",
    top: "15%",
    left: "40%",
    className: "w-40 sm:w-48 md:w-80",
  },
  {
    src: "./public/misc/sidegate.jpg",
    alt: "Image 4",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-36 sm:w-48 md:w-72",
  },
  {
    src: "./public/misc/E-summit.png",
    alt: "Image 5",
    rotate: "18deg",
    top: "25%",
    left: "65%",
    className: "w-32 sm:w-44 md:w-64",
  },
  {
    src: "./public/misc/meraki.png",
    alt: "Image 6",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-28 sm:w-36 md:w-48",
  },
];

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let z = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"));
      if (!isNaN(z) && z > maxZIndex) maxZIndex = z;
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onPointerDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4 rounded-lg shadow-lg",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default DragCards;
