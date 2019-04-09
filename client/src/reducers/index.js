import { combineReducers } from "redux";

import products from "./productsReducer";
import stocks from "./stocksReducer";
import cart from "./cartReducer";

export default combineReducers({
  products,
  stocks,
  cart
});
