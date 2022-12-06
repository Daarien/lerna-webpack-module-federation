import { useContext } from "react";
import ServiceContext from "./context";
import EventService from "./EventService";

export function EventServiceProvider({ children }) {
  return (
    <ServiceContext.Provider value={EventService}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useEventService() {
  return useContext(ServiceContext);
}
