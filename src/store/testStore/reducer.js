
const defaultState = {
  n: 0,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, n: state.n + action.n }
    default:
      return state
  }
}

export default reducer;