export function addCartItem(cartItem) {
  return {
    type: "ADD_CART_ITEM",
    payload: cartItem
  }
}
export function changeCartItem(cartItem) {
  return {
    type: "CHANGE_CART_ITEM",
    payload: cartItem
  }
}
export  function removeCartItem(id) {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id
  }
}
