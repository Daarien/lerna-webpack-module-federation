import { Context } from "shared-context";
import { ThemeProvider, Flex, Button } from "library";
import Welcome from "./Welcome";
import Widget from "./components/Widget";

export default function App() {
  return (
    <div>
      <h1>Media</h1>
      <div>
        <Context.Provider value={{ app: "media" }}>
          <Welcome />
        </Context.Provider>
      </div>
      <div>
        <ThemeProvider>
          <h4>ThemeProvider</h4>
          <Button>Button</Button>
          <p>
            <Widget />
          </p>
        </ThemeProvider>
      </div>
      <p>
        <Flex>
          <span>Flex</span>
          <span>Box</span>
        </Flex>
      </p>
    </div>
  );
}
