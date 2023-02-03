import React from "react";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const options = ["Home", "Program", "Blog", "About us"];
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <nav className="flex hidden md:flex gap-12 items-center">
        {options.map((option) => (
          <span className="text-[#000000]" key={option}>
            {option}
          </span>
        ))}
        <CustomButton>Log in</CustomButton>
      </nav>
      <button className="flex md:hidden text-4xl"><FiMenu/></button>
    </div>
  );
};

export default Navbar;
