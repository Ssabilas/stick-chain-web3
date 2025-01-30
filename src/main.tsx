import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "crypto-js";
import "remixicon/fonts/remixicon.css";
import "./css/input.css";
import "./css/output.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routers from "./Router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  </StrictMode>
);
