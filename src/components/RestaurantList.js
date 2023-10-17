import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import useOnline from "../hooks/useOnline";
import { filterData } from "../utils/helper";
import useRestaurantData from "../hooks/useRestaurantData";

export default function RestaurantList() {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantData();

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-2xl font-bold">
        Ooops! Looks like you are offline. Please check your internet connection
      </div>
    );
  }

  return filteredRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="container mx-auto max-w-screen-xl p-6 my-1 flex flex-col justify-center items-center">
      <div>
        <input
          data-testid="search-input"
          type="text"
          className="border-2 rounded-lg p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-6 xl:gap-8 mt-8">
        {/* Write logic for No Restaurant found here */}
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard restaurantInfo={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
