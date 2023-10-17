import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constant";

const socialHandles = [
  {
    key: 1,
    socialPlatform: "instagram",
    url: "#",
  },
  { key: 2, socialPlatform: "twitter", url: "#" },
  { key: 3, socialPlatform: "linkedin", url: "#" },
];

const legalNavigation = [
  {
    id: 1,
    title: "Privacy Policy",
    path: "privacypolicy",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    path: "termsconditions",
  },
];

const Footer = () => {
  return (
    <>
      <div className="hidden md:flex justify-center min-h-[104px] bg-gray-200 mt-6">
        <div className="container flex justify-center items-center">
          <h1 className="md:w-72 md:mr-12 text-2xl font-extrabold my-auto lg:w-[408px] mr-24">
            For better experience, download the FoodGasm app now
          </h1>
          <div className="flex justify-center my-auto mx-2 h-16 gap-5">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="googleplay"
            />
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="appstore"
            />
          </div>
        </div>
      </div>
      <footer className="bg-black">
        <div className="container max-w-screen-xl mx-auto w-full flex flex-col justify-between p-6">
          <div className="flex flex-col md:flex-row justify-evenly gap-5 text-center">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-white uppercase dark:text-white">
                Navigation
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {navigation.map((item) => {
                  return (
                    <li className="leading-10" key={item.id}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-white uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {socialHandles.map((account) => {
                  return (
                    <li className="leading-10" key={account.key}>
                      <a href={account.url} target="_blank" rel="noreferrer">
                        <span
                          className={`mr-2 fa fa-${account.socialPlatform}`}
                        ></span>
                        <span className="capitalize">
                          {account.socialPlatform}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {legalNavigation.map((item) => {
                  return (
                    <li className="mb-4 leading-6" key={item.id}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr className="w-full my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-gray-400 mb-4 text-center">
            © {new Date().getFullYear()} foodGasm · All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
