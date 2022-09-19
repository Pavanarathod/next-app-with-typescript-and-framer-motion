import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="flex p-5 items-center justify-between sticky top-0 max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://twitter.com/Iam_PavanRathod"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/Iam_PavanRathod"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Iam_PavanRathod"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="uppercase hidden md:inline-flex">Get in touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
