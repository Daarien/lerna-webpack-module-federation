import { createContext } from "react";
import EventService from "./EventService";

const ServiceContext = createContext({} as typeof EventService);

export default ServiceContext;
