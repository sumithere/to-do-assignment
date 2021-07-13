import {createStore} from "redux";
import globalReducer from "./reduxStores/globalReducer";

const store=createStore(globalReducer);

export default store;