import { useState } from "react";
import EwalletCards from "./EwalletCard";

const LoginButtons = () => {
  const [card, setCard] = useState(false);

  return (
    <div className="relative z-20" onScroll={() => setCard(!card)}>
      <button
        className="flex items-center justify-center px-12 py-2 font-semibold uppercase rounded-full bg-colorWhiteDark/85 text-colorViolet hover:bg-colorWhiteDark/60"
        onClick={() => setCard(!card)}
      >
        Login
      </button>
      <div className="fixed">{card && <EwalletCards />}</div>
    </div>
  );
};

export default LoginButtons;
