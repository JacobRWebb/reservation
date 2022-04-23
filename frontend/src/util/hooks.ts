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
