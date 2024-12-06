import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  //The scrollYProgress tracks the vertical scroll progress of the page as a value between 0 and 1.
  const { scrollYProgress } = useScroll();

  // The useMotionValueEvent hook listens to changes in the scrollYProgress value and updates the images state accordingly.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    const imagesShow = (arr) => {
      // Update the state of images
      setimages((prev) =>
        prev.map((item, index) =>
          // Check if the current index is in the 'arr' array
          arr.indexOf(index) === -1
            ? { ...item, isActive: false } // If not, set 'isActive' to false
            : { ...item, isActive: true }  // If yes, set 'isActive' to true
        )
      );
    };
    

    const scrollval = Math.floor(latest * 100);
    switch (scrollval) {
      // Scroll progess in the case 
      case 0: // 0%
        imagesShow([]);
        break;
      case 1: // 1%
        imagesShow([0]);
        break;
      case 2: // 2%
      // sending the array of indices of the images to show
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 10:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className=" relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[30vw] leading-none font-medium select-none ">
          work
        </h1>
        <div className=" absolute top-0 w-full h-full">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                  key={index}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
