"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [fullDate, setFullDate] = useState("");

  function updateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    let timeString = `${hours}:${minutes}:${seconds}`;
    let fullDateString = `${day}/${month}/${year}`;
    setTime(timeString);
    setFullDate(fullDateString);
  }

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full flex flex-col items-center justify-center border-2 border-red-400">
      <Image
        src="/logo.jpg"
        height={400}
        width={400}
        className="h-52 w-3/5 py-8"
      />
      <div className="flex w-full  p-2 h-12 items-center">
        <div className="w-[33.33%] h-full  flex justify-center items-center">
          Social Icons
        </div>
        <div className="w-[33.33%] h-full  flex justify-end items-center">
          Date: {fullDate} &nbsp; Time: {time}
        </div>
        <div className="w-[33.33%] h-full  flex justify-end items-center">
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
