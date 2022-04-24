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
    <div ref={navRef} className="relative z-50 w-full bg-white">
      <div
        id="navbar"
        className="mx-auto flex min-h-[50px] max-w-screen-lg flex-col items-center justify-between bg-white px-5 py-2 transition-all"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <AnimatePresence initial={false}>
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
            className="absolute inset-x-0 top-0 z-[51] m-5 flex origin-top-right flex-col rounded-lg bg-white p-5 shadow-lg shadow-gray-500"
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 25, opacity: 0 }}
          >
            <div className="flex w-full flex-row items-center justify-between">
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
    <h1 key="navbar-logo" className="text-2xl font-medium text-gray-800">
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
      className="rounded bg-black px-2 py-1 text-white"
    >
      {state ? <TiMinus /> : <TiThMenu />}
    </button>
  );
};

export default Navbar;
