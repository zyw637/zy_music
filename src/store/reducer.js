import { combineReducers } from "redux";

import testReducer from "@store/testStore/reducer"
import { reducer as homePageReducer } from "@store/homePage"

const cReducer = combineReducers({
  testReducer,
  homePageReducer
});
export default cReducer