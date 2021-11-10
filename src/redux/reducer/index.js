import {combineReducers} from "redux";
import contactReducer from "./contactReducer";
// root reducer
export default combineReducers({
    contact: contactReducer,
    // module2: module2Reducer
})
