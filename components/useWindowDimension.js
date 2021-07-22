import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

export default function useWindowDimensions() {
  const [screenWidth, setscreenWidth] = useState(1200);
  const [screenHeight, setscreenHeight] = useState(900);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  //render code only in client side to avoid server side "window not defined" in next js
  useEffect(() => {
    if (!windowDimensions) return;
    const { width, height } = windowDimensions;
    setscreenWidth(width);
    setscreenHeight(height);
  }, [windowDimensions]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenWidth, screenHeight };
}
