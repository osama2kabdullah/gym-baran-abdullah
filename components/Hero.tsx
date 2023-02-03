import Image from "next/image";
import React, { Component } from "react";
import hero from "../public/hero.png";
import CustomButton from "./CustomButton";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";
import {
  IoIosArrowDroprightCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

class Hero extends Component {
  render() {
    return (
      <div className="flex justify-flex items-center gap-5 pt-12">
        <div className="grid gap-6">
          <h1 className="text-5xl text-[#262524]">
            Healthy in side <br />
            <span className="text-[#8382EB]">fresh</span> out side
          </h1>
          <p className="text-[#8382EB] w-[80%]">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className="flex gap-5">
            <CustomButton>
              Get started <IoIosArrowDroprightCircle size={28} />
            </CustomButton>
            <CustomButton
              background={"#FFFFFF"}
              text={"#{264373}"}
              paddingX={4}
              gap={12}
            >
              <IoMdArrowDroprightCircle color="#264373" size={28} /> Learn more
            </CustomButton>
          </div>
          <div className="brands">
            <h4 className="text-lg">Brands:</h4>
            <div className="flex gap-4 md:text-[4em] text-[7em] w-full">
              <SiNike />
              <SiAdidas />
              <SiPuma />
              <SiReebok />
            </div>
          </div>
        </div>
        <Image
          src={hero}
          alt="gym baran"
          width={600} // automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    );
  }
}

export default Hero;
