//import action types
import { INCR, DECR } from "./cart.action";
let initialState = {
  product_Name: "Apple Iphone 11",
  price: 49900,
  qty: 2,
  image:
    "https://rukminim1.flixcart.com/image/224/224/kgiaykw0/mobile/r/f/s/apple-iphone-11-mhde3hn-a-original-imafwqepzbrcagw3.jpeg?q=90",
};
let cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCR:
      return { ...state, qty: state.qty + 1 };
    case DECR:
      return { ...state, qty: state.qty - 1 };
    default:
      return state;
  }
};
export { cartReducer };
