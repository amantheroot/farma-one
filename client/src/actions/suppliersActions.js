export function fetchSuppliers(suppliers) {
  return {
    type: "FETCH_SUPPLIERS",
    payload: suppliers
  }
}