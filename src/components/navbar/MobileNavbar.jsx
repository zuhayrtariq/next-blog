import React from "react";
import Links from "./Links";

const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default MobileNavbar;
