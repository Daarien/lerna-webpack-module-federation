import { Counter } from "./Counter";
import { Dogs } from "./Dogs";
import { Timer } from "./Timer";

type Stores = {
  counter: Counter;
  timer: Timer;
  dogs: Dogs;
};

export type StoreProps<Keys extends keyof Stores> = {
  [P in Keys]: Stores[P];
};
