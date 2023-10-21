import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IMG_CDN_URL } from "../constant";

function MobileViewMenuImage() {
  return (
    <div className="sm:hidden">
      <div className="flex flex-col items-center">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/druwjzmfmz7qvepq3bkr"
          className="h-24 w-28 border border-[#d4d5d9] rounded-lg shadow-md"
          alt="menuItem"
        />
        <button
          data-testid="addBtn"
          className="px-6 py-2 bg-white text-green-500 rounded-lg cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function DesktopViewMenuImage() {
  return (
    <div className="hidden sm:flex relative">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/druwjzmfmz7qvepq3bkr"
        className="h-24 w-[118px] border border-[#d4d5d9] rounded-lg shadow-md"
        alt="menuItem"
      />
      <div className="absolute inset-0 left-1/2 top-20 -translate-x-1/2 grid item-center w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-white text-center border shadow-md">
        <button
          data-testid="addBtn"
          className=" text-[#60b246] w-full g-full cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function MenuItems() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-6">
      <div
        className="flex justify-between cursor-pointer my-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className="text-lg">Accordion 1</h3>
        {isVisible ? (
          <MdKeyboardArrowUp size={30} />
        ) : (
          <MdKeyboardArrowDown size={30} />
        )}
      </div>
      {isVisible && (
        <div className="my-2">
          <div className="flex justify-between">
            <div>
              <MobileViewMenuImage />
              <h3 className="text-sm mr-1 sm:text-base font-medium text-[#3e4152] break-words">
                Paneer 65
              </h3>
              <span className="mr-2 font-normal text-[#3e4152] text-sm">
                Rs 200
              </span>
              <div className=" mt-3 text-[#282c3f73] text-sm overflow-x-auto max-w-md md:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates dolore esse dolorum vitae atque consequatur
                consectetur explicabo nihil deserunt eaque.
              </div>
            </div>
            <DesktopViewMenuImage />
          </div>
          <hr className="border-dotted my-4" />
        </div>
      )}
    </div>
  );
}
