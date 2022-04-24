import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (
  ref: RefObject<any>,
  options: IntersectionObserverInit = { rootMargin: "0px", threshold: 0 }
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
};

export enum ScreenSizes {
  xs,
  sm,
  md,
  lg,
  xl,
  "2xl",
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(ScreenSizes.sm);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize(ScreenSizes.xs);
      } else if (width < 768) {
        setScreenSize(ScreenSizes.sm);
      } else if (width < 1024) {
        setScreenSize(ScreenSizes.md);
      } else if (width < 1280) {
        setScreenSize(ScreenSizes.lg);
      } else if (width < 1536) {
        setScreenSize(ScreenSizes.xl);
      } else {
        setScreenSize(ScreenSizes["2xl"]);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
  }, []);

  return screenSize;
};

export const onClickOutSideRef = (
  ref: RefObject<any>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
