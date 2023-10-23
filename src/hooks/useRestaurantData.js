import { useState, useEffect } from "react";
import { Resturant_Data_URL, ADD_MORE_RESTAURANT_URL } from "../constant";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [LoadingMoreRestaurant, setLoadingMoreRestaurant] = useState(false);
  const [page, setPage] = useState(10);

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

  async function getMoreRestaurants() {
    setLoadingMoreRestaurant(true);
    try {
      const response = await fetch(ADD_MORE_RESTAURANT_URL, {
        method: "POST", // Use POST for fetching more restaurants
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers here
        },
        body: JSON.stringify({
          lat: 28.7093202,
          lng: 77.21384429999999,
          nextOffset: "COVCELQ4KICI9dKO74WgFzCnEw==", // Use the correct nextOffset value
          // Other payload parameters if needed
          seoParams: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/",
          },
          widgetOffset: {
            // Include your widgetOffset values here
            NewListingView_Topical_Fullbleed: "",
            NewListingView_category_bar_chicletranking_TwoRows: "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
              String(page),
          },
        }),
      });
      const data = await response.json();

      if (allRestaurants) {
        let newRestaurants =
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setFilteredRestaurants((prevRestaurants) => [
          ...prevRestaurants,
          ...newRestaurants,
        ]);
        setAllRestaurants((prevRestaurants) => [
          ...prevRestaurants,
          ...newRestaurants,
        ]);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoadingMoreRestaurant(false);
    }
  }

  return {
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
    getMoreRestaurants,
    LoadingMoreRestaurant,
    page,
    setPage,
  };
};

export default useRestaurantData;
