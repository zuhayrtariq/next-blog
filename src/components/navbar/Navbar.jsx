import Link from "next/link";
import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex w-full  justify-between px-12 py-4 items-center">
      <div className="font-bold text-3xl uppercase tracking-wider">Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
