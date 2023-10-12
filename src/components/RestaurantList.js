import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Resturant_Data_URL } from "../constant";

export default function RestaurantList() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(Resturant_Data_URL);
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // if (!filteredRestaurants) return <ShimmerUI />;

  return filteredRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="container mx-auto max-w-screen-xl p-6 my-5 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-6 xl:gap-8 mt-8">
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
