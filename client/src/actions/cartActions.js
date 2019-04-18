export function addCartItem(cartItem) {
  return {
    type: "ADD_CART_ITEM",
    payload: cartItem
  }
}
export function changeCartItem(product_id, product_qty) {
  return {
    type: "CHANGE_CART_ITEM",
    payload: {product_id, product_qty}
  }
}
export  function removeCartItem(id) {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id
  }
}
