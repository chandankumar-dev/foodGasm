import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [restaurantOffers, setRestaurantOffers] = useState(null);

  // fetch API
  useEffect(() => {
    getRestaurantMenu();
    window.scrollTo(0, 0);
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(FETCH_RESTAURANT_MENU_URL + resId);
      const restaurantMenuJson = await data.json();
      console.log();
      setRestaurantInfo(restaurantMenuJson?.data?.cards[0]?.card?.card?.info);
      setRestaurantOffers(
        restaurantMenuJson?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.offers
      );
      setRestaurantMenu(
        restaurantMenuJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards
      );
    } catch (err) {
      console.log(err);
    }
  }
  return { restaurantInfo, restaurantMenu, restaurantOffers };
};

export default useRestaurant;
