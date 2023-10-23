import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import ShimmerHelp from "../components/ShimmerHelp";
import useHelpFAQ from "../hooks/useHelpFAQ";

function Accordion({ title, description, isVisible, setIsVisible }) {
  return (
    <>
      <button
        className="w-full flex justify-between text-left cursor-pointer my-4 p-3 md:p-4 shadow-md rounded-md"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h3 className="text-sm md:text-base font-semibold">{title}</h3>
        {isVisible ? (
          <MdKeyboardArrowUp className="text-2xl" color="#282c3f73" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl" color="#7B8FA1" />
        )}
      </button>
      {isVisible && (
        <div className="italic text-sm my-2 p-2">{description}</div>
      )}
    </>
  );
}

export default function Help() {
  const [isVisible, setIsVisible] = useState(false);

  const { faq } = useHelpFAQ();

  return !faq ? (
    <ShimmerHelp />
  ) : (
    <div className="container mx-auto max-w-screen-md p-6">
      {faq?.map((question) => {
        return (
          <Accordion
            key={question.id}
            title={question.title}
            description={question.description}
            isVisible={isVisible === question.id}
            setIsVisible={(params) => {
              if (params) {
                setIsVisible(question.id);
              } else {
                setIsVisible(null);
              }
            }}
          />
        );
      })}
    </div>
  );
}
