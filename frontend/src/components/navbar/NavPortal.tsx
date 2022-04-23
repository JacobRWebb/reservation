import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, ReactPortal } from "react";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";

interface INavPortalProps {
  open: boolean;
}

const NavPortalInternal: FunctionComponent<INavPortalProps> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="NavbarPortal"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "tween" }}
          className="fixed z-[10] inset-x-0 top-0"
        >
          <Navbar />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavPortal: FunctionComponent<INavPortalProps> = ({
  ...navPortalProps
}) => {
  return createPortal(
    <NavPortalInternal {...navPortalProps} />,
    document.getElementById("root") || document.body,
    "NavPortal"
  );
};

export default NavPortal;
