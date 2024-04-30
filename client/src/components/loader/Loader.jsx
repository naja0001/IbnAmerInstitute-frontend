import { useEffect } from "react";
import "./loader.css";

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");

    if (loader) {
      console.log("Loader is rendered");
      setTimeout(() => {
        loader.classList.add("loader--hidden");
        console.log("Loader is hidden");
      }, 500);
    }
  }, []);

  return <div className="loader"></div>;
};

export default Loader;
