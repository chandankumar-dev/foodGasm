import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  // const {
  //   user: { name, email },
  // } = useContext(UserContext);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full h-20 top-0 flex justify-between items-center sticky shadow-md bg-white z-[1001]">
      <div className="container mx-auto max-w-screen-xl flex justify-between p-6">
        <Link to="/">
          <div className="text-2xl font-bold text-orange-500">FoodGasm</div>
        </Link>
        {toggleMenu ? (
          <button className="md:hidden" onClick={handleToggle}>
            <MdOutlineClose className="text-2xl" />
          </button>
        ) : (
          <button className="md:hidden" onClick={handleToggle}>
            <AiOutlineMenu className="text-2xl" />
          </button>
        )}

        <ul className="hidden md:flex items-center gap-10 lg:gap-15">
          <Link to="/search">
            <li className="flex items-center gap-2 text-lg hover:text-orange-400">
              <BsSearch /> Search
            </li>
          </Link>
          <Link to="/offers">
            <li className="flex items-center gap-2 text-lg hover:text-orange-400">
              <TbDiscount2 />
              Offers
            </li>
          </Link>
          <Link to="/help">
            <li className="flex items-center gap-2 text-lg hover:text-orange-400">
              <IoHelpBuoyOutline /> Help
            </li>
          </Link>
          <Link to="/signin">
            <li className="flex items-center gap-2 text-lg hover:text-orange-400">
              <FaRegUser /> Sign In
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center gap-2 text-lg hover:text-orange-400">
              <BsCart /> Cart {`(${cartItems.length})`}
            </li>
          </Link>
          {/* <li className="flex flex-col">
            <span className="capitalize">{name}</span>
            <span>{email}</span>
          </li> */}
        </ul>
        {toggleMenu && (
          <div
            className={`md:hidden fixed top-[75px] right-0 h-full w-3/4 bg-white shadow-lg overflow-y-auto z-[1000] transform transition-all duration-30000s`}
          >
            <ul className="my-6 space-y-4 text-lg">
              <li className="px-4 py-2 border-b">
                <Link
                  to="/search"
                  className="w-auto block"
                  onClick={handleToggle}
                >
                  Search
                </Link>
              </li>
              <li className="px-4 py-2 border-b">
                <Link
                  to="/offers"
                  className="w-auto block"
                  onClick={handleToggle}
                >
                  Offers
                </Link>
              </li>
              <li className="px-4 py-2 border-b">
                <Link
                  to="/help"
                  className="w-auto block"
                  onClick={handleToggle}
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
