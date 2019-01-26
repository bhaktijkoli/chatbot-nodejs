var initialState = {
  user: null,
  websites: [],
  menu: 'home',
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "AUTH_USER": {
      return {...state, user: action.payload}
    }
    case "AUTH_WEBSITES": {
      return {...state, websites: action.payload}
    }
    case "AUTH_MENU": {
      return {...state, menu: action.payload}
    }
  }

  return state
}
