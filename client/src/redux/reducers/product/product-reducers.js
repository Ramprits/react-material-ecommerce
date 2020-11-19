import {
  PRODUCT_FAILED,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./product-types";

const initialState = {
  productList: [],
  isFetching: false,
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isFetching: true, errorMessage: "" };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        productList: payload,
        errorMessage: "",
      };
    case PRODUCT_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
        productList: [],
      };
    default:
      return state;
  }
};
