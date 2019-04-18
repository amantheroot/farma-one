import initialState from "../store/initialState";

export default function reducer(state=initialState.cart,action) {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      return [...state, action.payload];
    }
    case "CHANGE_CART_ITEM": {
      const stateClone = [...state];
      stateClone[stateClone.findIndex(item => item.product_id === action.payload.product_id)].product_qty = action.payload.product_qty;
      return stateClone;
    }
    case "REMOVE_CART_ITEM": {
      const stateClone = [...state];
      const cartItemIndex = stateClone.findIndex(item => item.product_id === action.payload);
      stateClone.splice(cartItemIndex, 1);
      return stateClone;
    }
    default: {
      return state;
    }
  }
}