const defaultState = {
  balance: 0,
}

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'ADD_CASH':
      return {...state, balance:  state.balance + action.payload}

    case 'GET_CASH':
      return {...state, balance:  state.balance - action.payload}

    default:
      return state
  }
}
