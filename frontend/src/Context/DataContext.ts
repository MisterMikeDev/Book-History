import { createContext } from "react";
import { Data } from "../Interfaces";
const dataContext = createContext<Data | {}>({
    name: "",
    developer: "",
    version: "",
    stack: "",
    school: "",
    devThings: [],
    teamMembers: [],
});
export default dataContext;
