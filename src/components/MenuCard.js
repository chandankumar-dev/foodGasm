import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IMG_CDN_URL } from "../constant";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function MenuCard({ restaurantMenuItem }) {
  const [isVisible, setIsVisible] = useState(true);

  const { title, itemCards } = restaurantMenuItem;

  const dispatch = useDispatch();

  const addItemToCart = (menuItem) => {
    dispatch(addItem(menuItem));
  };

  return (
    <div className="my-6">
      <div
        className="flex justify-between cursor-pointer my-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className="text-lg font-semibold">{`${title} (${itemCards?.length})`}</h3>
        {isVisible ? (
          <MdKeyboardArrowUp size={30} />
        ) : (
          <MdKeyboardArrowDown size={30} />
        )}
      </div>
      {isVisible &&
        itemCards?.map((item) => {
          const { id, name, price, description, imageId, defaultPrice } =
            item?.card?.info;

          return (
            <div key={id} className="my-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm mr-1 sm:text-base font-medium text-[#3e4152] break-words">
                    {name}
                  </h3>
                  <span className="mr-2 font-normal text-[#3e4152] text-sm">
                    Rs {Math.round(price / 100 || defaultPrice / 100)}
                  </span>
                  <div className=" mt-3 text-[#282c3f73] text-sm overflow-x-auto max-w-md md:max-w-xl">
                    {description}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={IMG_CDN_URL + imageId}
                    className="h-24 w-28 border border-[#d4d5d9] rounded-lg shadow-md"
                    alt="menuItem"
                  />
                  <div className="absolute inset-0 left-1/2 top-20 -translate-x-1/2 grid item-center w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-white text-center border shadow-md">
                    <button
                      data-testid="addBtn"
                      className=" text-[#60b246] w-full g-full cursor-pointer"
                      onClick={() => addItemToCart(item?.card?.info)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-dotted my-4" />
            </div>
          );
        })}
    </div>
  );
}
