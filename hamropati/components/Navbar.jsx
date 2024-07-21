import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col items-center justify-center border-2 border-red-400">
      <Image
        src="/logo.jpg"
        height={400}
        width={400}
        className="h-52 w-3/5 py-8"
      />
      <div className="flex w-full border-green-400 p-2 border h-12 items-center">
        <div className="w-[33.33%] h-full border-green-400 border">
          Social Icons
        </div>
        <div className="w-[33.33%] h-full border-green-400 border">
          Date and Time
        </div>
        <div className="w-[33.33%] h-full border-green-400 border">
          Login button
        </div>
      </div>
      <div className="w-full flex justify-between px-3 h-16 items-center">
        <div className="flex">Many different buttons</div>
        <div className="">Search Button</div>
      </div>
    </nav>
  );
};

export default Navbar;
