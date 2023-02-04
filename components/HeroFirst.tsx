import Image from "next/image";
import React from "react";
import hero from "../public/hero.png";
import HeroText from "./HeroText";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";

const HeroFirst = () => {
  return (
    <div className="gap-6 md:grid-cols-2 grid grid-cols-1 items-center">
      <div>
      <HeroText
        para={
          "Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine."
        }
        head={"Healthy in side fresh out side"}
      />
      <h3 className="pt-12">Brands:</h3>
      <div className="flex text-[5em] gap-[.5em] md:w-[70%] w-full gap-2">
      <SiNike/>
      <SiAdidas/>
      <SiPuma/>
      <SiReebok/>
      </div>
      </div>
      <Image
        src={hero}
        alt="gym baran"
        // width={600} // automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
};

export default HeroFirst;