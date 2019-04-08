import { combineReducers } from "redux";

import products from "./productsReducer";
import stocks from "./stocksReducer";

export default combineReducers({
  products,
  stocks
});
