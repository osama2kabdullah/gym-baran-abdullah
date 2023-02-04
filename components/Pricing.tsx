import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { SiAdidas } from "react-icons/si";

const Pricing = () => {
  const options = [1, 2, 3];
  return (
    <div className="p-6 md:p-12 rounded-[30px] grid gap-12 md:grid-cols-3 bg-gradient-to-r to-[#9190E9] from-[#6462F0]">
      {options.map((option, index) => (
        <div key={index} className="flex gap-5 items-center">
          <div className="bg-[#FFFFFF] opacity-20 backdrop-blur-[32px] p-6 rounded-[20px]">
          <SiAdidas size={50} />
          </div>
          <div className="grid gap-2">
            <h3 className="text-[#FFFFFF] text-xl font-bold">
              Get that 11 line in 30 days
            </h3>
            <Link
              className="flex justify-between items-center text-[#FFFFFF] opacity-50"
              href={"/"}
            >
              Learn more <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
