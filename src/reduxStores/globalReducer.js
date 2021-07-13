import { combineReducers } from "redux";
import inputReducer from './inputReducer/inputReducer';

const combinedStore=combineReducers({
    input:inputReducer,
})
export default combinedStore;

