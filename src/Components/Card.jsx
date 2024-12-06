import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, render }) {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col ${render? "hover:bg-violet-600":""}  justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm">{render? ("Get In Touch"):("Up Next: News")}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-4xl font-medium mt-5">
            {render? ("Let's get to it, together."):('Insights and behind the scenes')}
  
        </h1>
      </div>
      <div className="w-full">
        {render ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start Project
            </h1>
            <button className="mt-5 py-2 px-5 rounded-full border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        ) : (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
