import { useContext } from "react";
import { Context } from "shared-context";

const Welcome = () => {
  const { app } = useContext(Context);

  return <p>This app is {app}</p>;
};

export default Welcome;
