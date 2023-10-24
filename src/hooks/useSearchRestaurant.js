import { useEffect, useState } from "react";
import {
  SEARCH_RESTAURANT_FOOD_URL,
  PRE_SEARCH_CUISINE_LIST_URL,
} from "../constant";

const useSearchRestaurant = (queryText) => {
  const [preSearchCuisine, setPreSearchCuisine] = useState(null);
  const [searchSuggestions, setSearchSuggestions] = useState(null);

  useEffect(() => {
    getPreSearchCuisine();
  }, []);

  useEffect(() => {
    getSearchResults();
    window.scroll(0, 0);
  }, [queryText]);

  async function getSearchResults() {
    try {
      if (queryText !== null && queryText !== "") {
        const data = await fetch(SEARCH_RESTAURANT_FOOD_URL + queryText);
        const searchResults = await data.json();
        setSearchSuggestions(searchResults?.data?.suggestions);
      } else if (queryText === "") {
        setSearchSuggestions(null);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getPreSearchCuisine() {
    try {
      const data = await fetch(PRE_SEARCH_CUISINE_LIST_URL);
      const preSearchCuisine = await data.json();
      setPreSearchCuisine(
        preSearchCuisine?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.info
      );
    } catch (err) {
      console.log(err);
    }
  }

  return { preSearchCuisine, searchSuggestions };
};

export default useSearchRestaurant;
