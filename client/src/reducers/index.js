import { combineReducers } from "redux";

import products from "./productsReducer";
import stocks from "./stocksReducer";
import customers from "./customersReducer";
import suppliers from "./suppliersReducer";
import orders from "./ordersReducer";

export default combineReducers({
  products,
  stocks,
  customers,
  suppliers,
  orders
});
