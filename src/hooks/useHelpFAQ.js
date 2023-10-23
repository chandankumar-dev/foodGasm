import { useState, useEffect } from "react";
import { FETCH_HELP_FAQ_URL } from "../constant";

const useHelpFAQ = () => {
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    getFAQ();
    window.scrollTo(0, 0);
  }, []);

  async function getFAQ() {
    const data = await fetch(FETCH_HELP_FAQ_URL);
    const json = await data.json();

    const filteredFAQs = json?.data?.issues?.data?.filter((question) => {
      return question.description !== null;
    });

    setFaq(filteredFAQs);
  }

  return { faq };
};

export default useHelpFAQ;
