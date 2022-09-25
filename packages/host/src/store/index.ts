import { Counter } from "./Counter";
import { Timer } from "./Timer";

type Stores = {
  counter: Counter;
  timer: Timer;
};

export type StoreProps<Keys extends keyof Stores> = {
  [P in Keys]: Stores[P];
};
