import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import App from "./App";
import counter from "./store/Counter";
import timer from "./store/Timer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider counter={counter} timer={timer}>
    <App />
  </Provider>
);