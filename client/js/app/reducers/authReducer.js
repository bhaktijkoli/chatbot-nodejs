var initialState = {
  user: null,
  website: null,
  websites: [],
  inbox: [],
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
    case "AUTH_SET_WEBSITE": {
      return {...state, website: action.payload}
    }
    case "AUTH_SET_INBOX": {
      return {...state, inbox: action.payload}
    }
    case "AUTH_MENU": {
      return {...state, menu: action.payload}
    }
  }

  return state
}
