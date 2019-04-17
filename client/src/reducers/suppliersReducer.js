import initialState from "../store/initialState";

export default function reducer(state=initialState.suppliers,action) {
  switch (action.type) {
    case "FETCH_SUPPLIERS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}