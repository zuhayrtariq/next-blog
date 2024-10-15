import Stats from "@/components/Stats";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex w-full  ">
      <div className="flex-1 justify-center flex">
        <div className="max-w-[460px]">
          <p className="text-lg text-backgroundSoft font-bold mb-8">
            About Agency
          </p>
          <h4 className="text-4xl font-bold  leading-tight mb-4">
            We create digital ideas that are bigger, bolder, braver and better
          </h4>
          <p className="text-sm mb-4">
            We create ideas that are bigger, bolder, braved and better. We
            believe in good ideas flexibility and precision. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quo dolore molestias saepe
            quaerat quae exercitationem voluptas distinctio facilis, maiores
            esse.
          </p>
          <div className="flex w-full justify-between items-center">
            <Stats text="Year of experience" />
            <Stats text="People reached" value="234 K+" />
            <Stats text="Services and plugins" value="5 K+" />
          </div>
        </div>
      </div>
      <div className="flex-1 justify-center flex relative">
        <Image
          src={"/about.png"}
          fill
          objectPosition="center"
          className="max-w-[400px] mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutPage;
