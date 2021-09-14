import { useEffect } from "react/cjs/react.development";
import { useLocalStorage } from "../useLocalStorage";
import { useMediaQuery } from "../useMediaQuery";

export const useDarkMode = () => {
  const preferDarkMode = useMediaQuery(
    ["(prefers-color-scheme: dark"],
    [true],
    false
  );
  const [enebled, setEnebled] = useLocalStorage("dark-mode", preferDarkMode);

  useEffect(() => {
    enebled
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [enebled]);

  return [enebled, setEnebled];
};
