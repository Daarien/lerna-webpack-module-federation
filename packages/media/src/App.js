import { Context } from "shared-context";
import Welcome from "./Welcome";

const App = () => (
  <div>
    <h1>Media</h1>
    <Context.Provider value={{ app: "media" }}>
      <Welcome />
    </Context.Provider>
  </div>
);

export default App;
