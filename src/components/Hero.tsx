import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Pavan Rathod",
      "Guy-who-loves-cofee.tsx",
      "<Life.ts Life.js Life.py />",
    ],
    loop: true,
    delaySpeed: 200,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 2.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src="/images/Pavan.jpeg"
        height={100}
        width={100}
        alt="profile image"
        className="rounded-full object-contain"
      />
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="">
          <span className="mr-2 text-5xl lg:text-6xl font-semibold">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="z-50">
        {["About", "Experiance", "Skills", "Proejcts"].map((item) => (
          <button className="heroButton" key={item}>
            {item}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
