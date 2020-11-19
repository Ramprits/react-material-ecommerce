import PRODUCT_REQUEST, {
  PRODUCT_FAILED,
  PRODUCT_SUCCESS,
} from "./product-types";

export const productRequest = () => ({
  type: PRODUCT_REQUEST,
});

export const productSuccess = payload => ({
  type: PRODUCT_SUCCESS,
  payload,
});

export const productFailed = payload => ({
  type: PRODUCT_FAILED,
  payload,
});
