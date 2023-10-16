import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  // this is how we can read the dynamic URL
  const params = useParams();
  const { resId } = params;

  const restaurant = useRestaurantMenu(resId);

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="container mx-auto max-w-screen-xl p-6">
      <h2>Restaurant Id - {resId}</h2>
      <h1>{restaurant?.name}</h1>
      <img
        className="rounded-2xl object-cover min-w-[250px] h-[200px] mt-5"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        alt="restaurant"
      />
    </div>
  );
};

export default RestaurantMenu;
