import axios from "axios";

//# 1st initial state/action types - building the foundation of redux
//# initialState is a set of values used to fill in data when redux starts
const initialState = {
  user: {
    email: "",
    user_id: 0,
  },
  cart: [],
  loading: false,
  errorMessage: "",
};

const GET_USER = "GET_USER";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

//# 2nd action builders - building the incoming data flow
//# all action builders should return an object with a 'type' and 'payload'
export function getUser() {
  const user = axios
    .get("/auth/user")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return {
    type: GET_USER,
    payload: user,
  };
}

export function addCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeCart(item) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

//# 3rd reducer function - building how redux handles that incoming data

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case GET_USER + "_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage: "axios request failed",
      };
    case GET_USER + "_FULFILLED":
      return {
        user: payload,
        loading: false,
        errorMessage: "",
      };
    case ADD_TO_CART:
      return {
      ...state, cart: [...state.cart, payload]
      };
    default:
      return state;
  }
}
