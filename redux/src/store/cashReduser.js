const defaultState = {
  balance: 0,
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {

    case ADD_CASH:
      return {...state, balance:  state.balance + action.payload}

    case GET_CASH:
      return {...state, balance:  state.balance - action.payload}

    default:
      return state
  }
}

export const actionAddCash = payload => ({type: ADD_CASH, payload});
export const actionGetCash = payload => ({type: GET_CASH, payload});
