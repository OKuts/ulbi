const defaultState = {
  users: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'ADD_CUSTOMER':
      return {...state, users:  [...state.users, action.payload]}

    case 'REMOVE_CUSTOMER':
      return {...state, users:  state.users.filter(user => user.id !== action.payload)}

    default:
      return state
  }
}
