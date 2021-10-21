//Reducer is pure function, it take two arguments
//state, action
import { GM, GN } from "./message.action";

let initialState = {
  message: "Hello, Mr Rajini",
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GM:
      return { message: "Good Morning Mr Rajini" };
    case GN:
      return { message: "Good Night Mr Rajini" };
    default:
      return state;
  }
};
export { messageReducer };
