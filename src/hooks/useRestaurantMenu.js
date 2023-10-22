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

      const selectRestaurantInfo = restaurantMenuJson?.data?.cards?.filter(
        (restaurant) => {
          if (restaurant?.card?.card?.hasOwnProperty("info")) {
            return restaurant;
          }
        }
      );

      const selectOffers = restaurantMenuJson?.data?.cards?.filter((item) => {
        if (item?.card?.card?.id === "offerCollectionWidget_UX4") {
          return item;
        }
      });

      const selectRestaurantMenu = restaurantMenuJson?.data?.cards?.filter(
        (restaurant) => {
          if (restaurant.hasOwnProperty("groupedCard")) {
            return restaurant;
          }
        }
      );

      setRestaurantInfo(selectRestaurantInfo[0]?.card?.card?.info);
      setRestaurantOffers(
        selectOffers[0]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
      setRestaurantMenu(
        selectRestaurantMenu[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (err) {
      console.log(err);
    }
  }
  return { restaurantInfo, restaurantMenu, restaurantOffers };
};

export default useRestaurant;
