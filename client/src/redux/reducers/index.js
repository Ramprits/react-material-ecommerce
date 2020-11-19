import { combineReducers } from "redux";
import user from "./user/user-reducers";
import products from "./product/product-reducers";
export default combineReducers({
  user,
  products,
});
