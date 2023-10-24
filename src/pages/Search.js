import React, { useEffect, useState } from "react";
import useSearchRestaurant from "../hooks/useSearchRestaurant";
import { SEARCH_PRE_LIST_IMAGE_URL } from "../constant";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [queryText, setQueryText] = useState(null);

  const handleSearchText = (text) => {
    setQueryText(text);
  };

  const { preSearchCuisine, searchSuggestions } =
    useSearchRestaurant(queryText);

  useEffect(() => {
    console.log(searchSuggestions);
  }, [searchSuggestions]);

  return (
    <div className="container min-h-[50vh] mx-auto max-w-screen-xl p-6">
      <div className="w-full flex justify-center items-center my-5">
        <input
          data-testid="search-input"
          type="text"
          className="w-[50%] h-12 p-2 rounded-lg border-2"
          placeholder="Search"
          value={searchText || ""}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="text-white p-2 m-2 rounded-md bg-orange-500 hover:bg-orange-600"
          onClick={() => {
            handleSearchText(searchText);
          }}
        >
          Search
        </button>
      </div>
      {searchSuggestions ? (
        <div></div>
      ) : (
        <div className="my-5 flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Popular Cuisines</h3>
          {preSearchCuisine ? (
            <div className="flex justify-center gap-2 flex-wrap">
              {preSearchCuisine?.map((cuisine) => {
                return (
                  <img
                    key={cuisine?.id}
                    className="object-cover h-[150px]"
                    src={SEARCH_PRE_LIST_IMAGE_URL + cuisine.imageId}
                    alt="cuisine"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center gap-2 flex-wrap my-2">
              {Array(12)
                .fill("")
                .map((e, index) => (
                  <div
                    key={index}
                    className="animate-pulse h-28 w-28 my-2 p-1 md:p-6 bg-gray-400 rounded-md object-cover"
                  />
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
