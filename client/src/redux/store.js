import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleWares.push(logger);
}
export default createStore(rootReducer, applyMiddleware(...middleWares));
