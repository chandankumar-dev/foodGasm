import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <div className="shadow-md">
      <div className="container mx-auto max-w-screen-xl flex justify-between p-6">
        <Link to="/">
          <div className="text-2xl font-bold">FoodGasm</div>
        </Link>
        <button className="lg:hidden">
          <AiOutlineMenu className="text-2xl" />
        </button>
        <ul className="hidden lg:flex items-center gap-10 lg:gap-15">
          <Link to="/search">
            <li className="flex items-center gap-2 text-lg">
              <BsSearch /> Search
            </li>
          </Link>
          <Link to="/offers">
            <li className="flex items-center gap-2 text-lg">
              <TbDiscount2 />
              Offers
            </li>
          </Link>
          <Link to="/help">
            <li className="flex items-center gap-2 text-lg">
              <IoHelpBuoyOutline /> Help
            </li>
          </Link>
          <Link to="/signin">
            <li className="flex items-center gap-2 text-lg">
              <FaRegUser /> Sign In
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center gap-2 text-lg">
              <BsCart /> Cart
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
