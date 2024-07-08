import { useEffect, useState } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState("none");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 8) {
        setHeaderColor("linear-gradient(90deg, rgba(234,234,243,1) 0%, rgba(192,210,243,1) 35%, rgba(217,245,251,1) 100%)");
      } else {
        setHeaderColor("none");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return headerColor;
};

export default useHeaderColor;
