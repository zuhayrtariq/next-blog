import React from "react";

const Stats = ({ text = "Lorem Lorem Lorem", value = "10 K+" }) => {
  return (
    <div className="my-2 mx-1">
      <h5 className="text-xl font-bold  text-backgroundSoft">{value}</h5>
      <p className="text-sm mt-1">{text}</p>
    </div>
  );
};

export default Stats;
