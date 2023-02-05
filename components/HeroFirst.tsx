import Image from "next/image";
import React from "react";
import hero from "../public/hero.png";
import HeroText from "./HeroText";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";

const HeroFirst = () => {
  return (
    <div className="gap-6 lg:grid-cols-2 grid grid-cols-1 items-center">
      <div className="lg:p-12 p-6">
        <h1 className="md:text-[56px] text-[28px] font-bold">
          Healthy in side <span className="text-[#8382EB]">fresh</span> out side
        </h1>
        <HeroText
          para={
            "Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine."
          }
          head={""}
          secondButton={true}
        />
        <h3 className="pt-12">Brands:</h3>
        <div className="flex text-[#8382EB] text-[5em] gap-[.5em] md:w-[70%] w-full gap-2">
          <SiNike />
          <SiAdidas />
          <SiPuma />
          <SiReebok />
        </div>
      </div>
      <div>
        <Image
          src={hero}
          alt="gym baran"
        />
      </div>
    </div>
  );
};

export default HeroFirst;
