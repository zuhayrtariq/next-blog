import Link from "next/link";
import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="w-full  justify-between py-4 items-center flex h-[100px]">
      <div className="font-bold text-3xl tracking-tighter">ZuhayrT</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
