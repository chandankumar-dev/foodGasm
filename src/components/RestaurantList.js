import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Resturant_Data_URL } from "../constant";
import { filterData } from "../utils/helper";

export default function RestaurantList() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  // useEffect(() => {
  //   console.log(allRestaurants, "all restaurants");
  // }, [allRestaurants]);

  async function getRestaurants() {
    const data = await fetch(Resturant_Data_URL);
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(json?.data?.cards[2]?.card?.card, "console");
  }

  // if (!allRestaurants) return null;

  return filteredRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="container mx-auto max-w-screen-xl p-6 my-5 flex flex-col justify-center items-center">
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
          className="p-2 m-2 bg-purple-700 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
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
            <RestaurantCard
              key={restaurant.info.id}
              restaurantInfo={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
}
