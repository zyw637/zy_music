
const addAction = n => ({
  type: "ADD",
  n
})

export const getAddAction = (n) => {
  return dispatch => dispatch(addAction((n)))
}