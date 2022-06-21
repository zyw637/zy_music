import * as actionTypes from "./constants";

const defaultState = {
  topBanner: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_BANNER:
      return { ...state, topBanner: action.topBanner }
    default:
      return state;
  }
}

export default reducer;