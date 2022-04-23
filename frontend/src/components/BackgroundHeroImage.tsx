import { FunctionComponent } from "react";

const BackgroundHeroImage: FunctionComponent = () => {
  return (
    <img
      src="/hero.jpg"
      className="z-[-1] absolute h-full w-full object-cover"
    />
  );
};

export default BackgroundHeroImage;
