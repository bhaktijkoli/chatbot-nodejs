var initialState = {
  user: null,
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "AUTH_USER": {
      return {...state, user: action.payload}
    }
  }

  return state
}
