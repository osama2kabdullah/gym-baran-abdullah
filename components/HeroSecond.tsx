import React from "react";
import HeroText from "./HeroText";
import Image from "next/image";
import secondHero from "../public/secondHero.png";

const HeroSecond = () => {
  return (
    <div className="pt-12 md:grid-cols-2 items-center grid grid-cols-1">
      <Image
        src={secondHero}
        alt="gym baran"
        // width={600} // automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <HeroText
        para={
          "Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. "
        }
        head={"Best full body workout to lose fat"}
      />
    </div>
  );
};

export default HeroSecond;
