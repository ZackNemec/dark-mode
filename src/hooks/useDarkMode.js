import React from "react";
import useLocalStorage from "./useLocalStrorage";

const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage(false);
  React.useEffect(() => {
    someValue === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [someValue]);

  return [someValue, setSomeValue];
};

export default useDarkMode;
