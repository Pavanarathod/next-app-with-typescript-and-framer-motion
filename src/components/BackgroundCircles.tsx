import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping " />
      <div className="absolute border border-[333333] h-[300px] w-[300px] rounded-full mt-52 animate-ping " />
      <div className="absolute border border-[333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping " />
      <div className="absolute border border-[#F7AB0A] opacity-20 h-[650px] w-[650px]  rounded-full mt-52 animate-pulse" />
    </div>
  );
};

export default BackgroundCircles;
