import React from "react";
import HeroText from "./HeroText";
import Image from "next/image";
import secondHero from "../public/secondHero.png";

const HeroSecond = () => {
  return (
    <div className="flex-col-reverse lg:flex lg:flex-row-reverse gap-3 items-center justify between">
      
      <div className="lg:p-12 p-6">
      <HeroText
        para={
          "Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. "
        }
        head={"Best full body workout to lose fat"}
      />
      </div>
      
      <Image
        src={secondHero}
        alt="gym baran"
      />
    </div>
  );
};

export default HeroSecond;
