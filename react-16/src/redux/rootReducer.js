import { combineReducers } from "redux";
import { cartReducer } from "./Cart/cart.reducer";
let rootReducer = combineReducers({ cart: cartReducer });

export { rootReducer };
