import { FunctionComponent } from "react";
import BackgroundHeroImage from "./components/BackgroundHeroImage";
import Navbar from "./components/navbar/Navbar";

const App: FunctionComponent = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col overflow-auto snap snap-y">
        <Navbar />
        <BackgroundHeroImage />
      </div>
    </>
  );
};

export default App;
