import { useTheme } from "next-themes";
import { useEffect } from "react";

export const useDynamicBg = ( ) => {
    const { theme } = useTheme();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const root = document.documentElement;
  
        if (theme === "light") {
          root.style.backgroundImage =
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)";
          root.style.backgroundColor = ""; 
        } else if (theme === "dark") {
          root.style.backgroundImage = "";
          root.style.backgroundColor = "black";
        }
      }
    }, [theme]);
}

export default useDynamicBg