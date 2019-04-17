import { combineReducers } from "redux";

import products from "./productsReducer";
import suppliers from "./suppliersReducer";
import cart from "./cartReducer";

export default combineReducers({
  products,
  suppliers,
  cart
});
