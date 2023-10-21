import { useState, useEffect } from "react";
import { Resturant_Data_URL } from "../constant";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
    window.scrollTo(0, 0);
  }, []);

  async function getRestaurants() {
    const data = await fetch(Resturant_Data_URL);
    const json = await data.json();

    const filteredJson = json?.data?.cards?.filter((restaurant) => {
      return restaurant?.card?.card?.id === "restaurant_grid_listing";
    });

    setAllRestaurants(
      filteredJson[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      filteredJson[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return {
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurantData;
