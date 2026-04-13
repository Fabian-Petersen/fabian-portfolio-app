"use client";

// $ create a hook that check for the screen width whn it is mobie and return a boolean value

import { useEffect, useState } from "react";

const useScreenSize = (width: number) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= width);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobile;
};

export default useScreenSize;
