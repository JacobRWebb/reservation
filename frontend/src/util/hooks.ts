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
  const getScreenSize = (): ScreenSizes => {
    if (typeof window === "undefined") return ScreenSizes.xs;

    const width = window.innerWidth;
    if (width < 640) {
      return ScreenSizes.xs;
    } else if (width < 768) {
      return ScreenSizes.sm;
    } else if (width < 1024) {
      return ScreenSizes.md;
    } else if (width < 1280) {
      return ScreenSizes.lg;
    } else if (width < 1536) {
      return ScreenSizes.xl;
    } else {
      return ScreenSizes["2xl"];
    }
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => {
      setScreenSize(getScreenSize());
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
