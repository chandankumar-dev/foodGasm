import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // fetch API
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(FETCH_RESTAURANT_MENU_URL + resId);
      const restaurantMenuJson = await data.json();
      setRestaurant(restaurantMenuJson.data.cards[0].card.card.info);
    } catch (err) {
      console.log(err);
    }
  }
  // return restaurant data
  return restaurant;
};

export default useRestaurant;
