import { AnimatePresence, motion } from "framer-motion";
import { createRef, FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { screenSizeOnly } from "../../util/helper";
import { onClickOutSideRef, ScreenSizes } from "../../util/hooks";
import { TiMinus, TiThMenu } from "react-icons/ti";

const Navbar: FunctionComponent = () => {
  const navRef = createRef<HTMLDivElement>();

  const [open, setOpen] = useState(false);

  onClickOutSideRef(navRef, () => setOpen(false));

  const isMobile = screenSizeOnly([ScreenSizes.xs, ScreenSizes.sm]);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div ref={navRef} className="relative w-full bg-white">
      <div
        id="navbar"
        className="bg-white max-w-screen-lg mx-auto px-5 py-2 min-h-[50px] flex flex-col justify-between items-center transition-all"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <AnimatePresence>
            {!open && <NavLogo />}
            {isMobile && !open && (
              <motion.div
                key="navbar-toggle"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <ToggleNavbar state={open} toggle={() => setOpen(!open)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            key="navbar-popover"
            className="origin-top-right bg-white rounded-lg absolute flex flex-col top-0 inset-x-0 z-[51] m-5 p-5"
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 25, opacity: 0 }}
          >
            <div className="flex flex-row w-full justify-between items-center">
              <NavLogo />
              <ToggleNavbar state={open} toggle={() => setOpen(!open)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLogo: FunctionComponent = () => {
  return (
    <h1 key="navbar-logo" className="text-gray-800 text-2xl font-medium">
      Xodius
    </h1>
  );
};

const ToggleNavbar: FunctionComponent<{
  state: boolean;
  toggle: () => void;
}> = ({ state, toggle }) => {
  return (
    <button
      onClick={() => toggle()}
      className="bg-black text-white px-2 py-1 rounded"
    >
      {state ? <TiMinus /> : <TiThMenu />}
    </button>
  );
};

export default Navbar;
