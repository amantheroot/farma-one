import initialState from "../store/initialState";

export default function reducer(state=initialState.cart,action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}