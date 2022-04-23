import { ScreenSizes, useScreenSize } from "./hooks";

export const screenSizeOnly = (screens: ScreenSizes[]) => {
  const screenSize = useScreenSize();
  return screens.includes(screenSize);
};
