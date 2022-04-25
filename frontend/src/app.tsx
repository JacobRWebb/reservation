import { FunctionComponent } from "react";
import BackgroundHeroImage from "./components/BackgroundHeroImage";
import Navbar from "./components/navbar/Navbar";

const App: FunctionComponent = () => {
  return (
    <div className="snap relative flex max-h-screen min-h-screen snap-y flex-col items-center overflow-hidden">
      <Navbar />
      <BackgroundHeroImage />
    </div>
  );
};

export default App;
