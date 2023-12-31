import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  // this is how we can read the dynamic URL
  const params = useParams();
  const { resId } = params;

  const { restaurantInfo, restaurantMenu, restaurantOffers } =
    useRestaurantMenu(resId);

  const filteredItemCards = restaurantMenu?.filter((item) => {
    return item?.card?.card?.hasOwnProperty("itemCards");
  });

  return !restaurantInfo || !restaurantMenu ? (
    <ShimmerUI />
  ) : (
    <div className="container max-w-[800px] mt-5 mx-auto">
      <div className="max-w-[800px] h-8 text-xs text-[#93959f] flex items-center justify-between">
        <div>
          <Link to="/">
            <span className="mx-1 text-inherit">Home</span>
          </Link>
          <span className="mx-1 text-inherit">/</span>
          <span className="mx-1 text-inherit">{restaurantInfo.name}</span>
        </div>
        <div className="flex cursor-pointer gap-4 pr-4">
          <AiOutlineHeart size={23} />
          <AiOutlineSearch size={23} color="black" />
        </div>
      </div>
      <div className="my-0 mx-4">
        <div className="pt-4 mb-4 flex justify-between">
          <div className="mr-4 inline-block">
            <h1 className="text-xl font-bold mb-2 text-[#282c3f] capitalize">
              {restaurantInfo.name}
            </h1>
            <p className="text-sm text-[#93959f] ">
              {restaurantInfo?.cuisines.join(", ")}
            </p>
            <p className="text-sm text-[#93959f]">
              <span>{restaurantInfo?.areaName}, </span>
              <span>{restaurantInfo?.sla?.lastMileTravel} km</span>
            </p>
          </div>
          <button className="p-2 border border-[#e9e9eb]">
            <h3 className="text-[#3d9b6d] pb-[10px] mb-2 border-b font-bold">
              ⭐{restaurantInfo?.avgRating}
            </h3>
            <h3 className="text-xs font-semibold text-[#8b8d97]">
              {restaurantInfo?.totalRatingsString}
            </h3>
          </button>
        </div>
        <hr className="border-dotted" />
        <div className="flex gap-6 mt-2">
          <div className="flex items-center gap-3 font-bold">
            <svg
              className=""
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              />
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              />
            </svg>
            {restaurantInfo?.sla?.deliveryTime} MINS
          </div>
          <div className="flex items-center gap-3 font-bold">
            <svg
              className="mr-[10px]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              />
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              />
            </svg>
            {restaurantInfo?.costForTwoMessage}
          </div>
        </div>
        <div className="hidden md:flex justify-between my-4">
          {restaurantOffers?.map((restaurant) => {
            return (
              <button
                className="p-2 border border-slate-300 rounded-md"
                key={restaurant?.info?.offerIds}
              >
                {restaurant?.info?.header}
              </button>
            );
          })}
        </div>
        {/* <div>Veg Only</div> */}
        {filteredItemCards?.map((item, index) => {
          if (item?.card?.card?.title) {
            return <MenuCard key={index} restaurantMenuItem={item.card.card} />;
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
