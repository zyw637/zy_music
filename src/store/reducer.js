import { combineReducers } from "redux";

import testReducer from "@store/testStore/reducer"

const cReducer = combineReducers({
  testReducer,
});
export default cReducer