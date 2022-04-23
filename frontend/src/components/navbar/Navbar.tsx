import { ForwardedRef, forwardRef, useState } from "react";

const Navbar = (props: any, ref: ForwardedRef<any>) => {
  return (
    <div className="px-5 py-3" ref={ref}>
      <div className="relative w-full max-w-screen-xl">Navbar</div>
    </div>
  );
};

export default forwardRef(Navbar);
