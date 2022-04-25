import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import { screenSizeOnly } from "../../util/helper";
import { ScreenSizes } from "../../util/hooks";
import ToggleNavbar from "./NavbarToggle";
import NavLogo from "./NavLogo";

const NavbarHeader: FunctionComponent<{
  open: boolean;
  toggle: () => void;
  popover?: boolean;
}> = ({ open, toggle, popover = false }) => {
  const isMobile = screenSizeOnly([ScreenSizes.xs, ScreenSizes.sm]);

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <AnimatePresence initial={false}>
        {popover && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <NavLogo />
            </motion.div>
            <motion.div
              key="navbar-toggle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <ToggleNavbar state={open} toggle={toggle} />
            </motion.div>
          </>
        )}
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <NavLogo />
          </motion.div>
        )}
        {isMobile && !open && (
          <motion.div
            key="navbar-toggle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <ToggleNavbar state={open} toggle={toggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarHeader;
