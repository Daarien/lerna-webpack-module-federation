import { Counter } from "./counter";
import { Dogs } from "./dogs";
import { Timer } from "./timer";

type Stores = {
  counter: Counter;
  timer: Timer;
  dogs: Dogs;
};

export type StoreProps<Keys extends keyof Stores> = {
  [P in Keys]: Stores[P];
};
