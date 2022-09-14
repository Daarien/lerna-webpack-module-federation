import { EventServiceProvider } from "shared-context";
import { ThemeProvider, Flex, Button } from "library";
import Welcome from "./Welcome";
import Widget from "./components/Widget";

export default function App() {
  return (
    <EventServiceProvider>
    <div>
      <h1>Media</h1>
      <div>
          <Welcome />
      </div>
      <div>
        <ThemeProvider>
          <h4>ThemeProvider</h4>
          <Button>Button</Button>
          <div>
            <Widget />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <Flex>
          <span>Flex</span>
          <span>Box</span>
        </Flex>
      </div>
    </div>
    </EventServiceProvider>
  );
}
