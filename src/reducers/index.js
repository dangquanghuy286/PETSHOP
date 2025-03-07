import { combineReducers } from "redux"
import cartReducer from "./cart";
import loginReducer from "./login";
const allReducers = combineReducers({
    cartReducer, loginReducer
});
export default allReducers;