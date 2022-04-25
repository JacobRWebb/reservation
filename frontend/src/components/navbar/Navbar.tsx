import { AnimatePresence, motion } from "framer-motion";
import { createRef, FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { screenSizeOnly } from "../../util/helper";
import { onClickOutSideRef, ScreenSizes } from "../../util/hooks";
import { TiMinus, TiThMenu } from "react-icons/ti";
import NavLogo from "./NavLogo";
import ToggleNavbar from "./NavbarToggle";
import NavbarHeader from "./NavbarHeader";

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
        <NavbarHeader open={open} toggle={() => setOpen(!open)} />
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
            <NavbarHeader
              popover={true}
              open={open}
              toggle={() => setOpen(!open)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
