import { FunctionComponent } from "react";
import { TiMinus, TiThMenu } from "react-icons/ti";

const ToggleNavbar: FunctionComponent<{
  state: boolean;
  toggle: () => void;
}> = ({ state, toggle }) => {
  return (
    <button
      onClick={() => toggle()}
      className="flex h-8 w-8 items-center justify-center rounded bg-black p-1 text-white"
    >
      {state ? <TiMinus /> : <TiThMenu />}
    </button>
  );
};

export default ToggleNavbar;
