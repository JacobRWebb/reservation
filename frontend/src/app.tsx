import { AnimatePresence } from "framer-motion";
import { createRef, FunctionComponent, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import NavPortal from "./components/navbar/NavPortal";
import { useOnScreen } from "./util/hooks";

const App: FunctionComponent = () => {
  const refNavbar = createRef<HTMLDivElement>();
  const navbarOnScreen = useOnScreen(refNavbar);

  return (
    <>
      <div className="relative min-h-screen flex flex-col overflow-auto snap snap-y">
        <Navbar ref={refNavbar} />
        <div className="h-screen snap-center">
          <img src="/hero.jpg" className="object-cover" />
        </div>
        <div className="bg-red-50 h-screen snap-center">Testing</div>
        <NavPortal open={!navbarOnScreen} />
      </div>
    </>
  );
};

export default App;
