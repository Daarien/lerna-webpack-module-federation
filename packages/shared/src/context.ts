import { createContext } from "react";
import EventService from "./EventService";

const ServiceContext = createContext({} as EventService);

export default ServiceContext;
