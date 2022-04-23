import { FunctionComponent } from "react";
import Navbar from "./components/navbar/Navbar";

const App: FunctionComponent = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col overflow-auto snap snap-y">
        <div className="h-screen snap-center">
          <img src="/hero.jpg" className="h-full w-full object-cover" />
        </div>
        <div className="bg-red-50 h-screen snap-center">Testing</div>
        <Navbar />
      </div>
    </>
  );
};

export default App;
