import React from "react";
import { SpotiCarousel } from "./SpotiCarousel";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
} from "@/utils/motion";
import TypingTitle from "./UI/TypingText";
import Gallery from "./Gallery";

const OurWork = () => {
  return (
    <motion.section id="our-work" className="py-12 lg:py-32 flex flex-col-reverse  sm:flex-row max-w-7xl px-6 lg:px-8 mx-auto bg-gradient-to-r from-artman-blue-50 to-artman-blue-100  h-min[500px] items-center h-screen"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className=" flex-1 sm:pr-6  w-[630px] h-[630px] py-6 mx-auto rounded-full overflow-hidden "
      // variants={fadeIn("right", "spring", 0.5, 1)}
      >
        {/* <SpotiCarousel /> */}
        <Gallery />
      </motion.div>
      <div className=" flex-1 lg:pl-8 lg:pt-4 lg:max-w-lg pb-24 sm:pb-32  ">
        <TypingTitle title="Our Work" textStyles="mt-2 text-3xl font-bold tracking-tight text-artblack sm:text-4xl"/>
        <motion.p className="mt-10 max-w-xl space-y-8 text-base leading-7 text-artman-blue-900"
        variants={fadeIn("up", "tween", 0.5, 1.5)}
        >
          Music mixed and mastered by us has reached well {" "} <br />
          <span className=" font-extrabold text-3xl sm:text-4xl text-artman-blue-500 ">
            over 200 millions combined Spotify plays
          </span>
          . <br /> We have extensive knowledge and experience in the music industry and its expectations.
        </motion.p>
      </div>
    </motion.section>
    
  
  );
};

export default OurWork;