import React from "react";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <section
      className=" h-[60vh] mt-[14vh] bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1300px] mx-auto p-17 flex flex-col justify-center gap-3">
        <h1 className="text-red-600 text-8xl uppercase font-bold tracking-tight">
          Big Sale!
        </h1>
        <h2 className="text-zinc-600 text-3xl">
          Up to 50% oFF Limited Time Only
        </h2>
        <div className="text-6xl font-bold text-zinc-800 flex gap-x-3  p-3 ">
          <span className="text-white bg-zinc-800  ">00</span>:
          <span className="text-white bg-zinc-800  ">00</span>:
          <span className="text-white bg-zinc-800  ">00</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
