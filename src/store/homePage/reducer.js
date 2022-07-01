import * as actionTypes from "./constants";

const defaultState = {
  topBanner: [],
  playLists: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_BANNER:
      return { ...state, topBanner: action.topBanner }
    case actionTypes.GET_PLAY_LIST:
        return { ...state, playLists: action.playLists }
    default:
      return state;
  }
}

export default reducer;