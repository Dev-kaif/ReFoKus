import React from "react";
import Button from "./Button";

function Product({ value }) {
  return (
    <div className="w-full py-5 text-white mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-24">
        <h1 className="text-5xl capitalize font-semibold">{value.title}</h1>
        <div className="w-1/3">
          <p className="mb-8">{value.description}</p>
          <div className="flex items-center gap-5">
            {value.live && <Button text={"Get Started"} />}
            {value.case && <Button text={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
