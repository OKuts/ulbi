const defaultState = {
  users: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {

    case ADD_CUSTOMER:
      return {...state, users:  [...state.users, action.payload]}

   case ADD_CUSTOMERS:
      return {...state, users:  [...state.users, ...action.payload]}

    case REMOVE_CUSTOMER:
      return {...state, users:  state.users.filter(user => user.id !== action.payload)}

    default:
      return state
  }
}

export const actionAddCustomer = payload => ({type: ADD_CUSTOMER, payload});
export const actionAddCustomers = payload => ({type: ADD_CUSTOMERS, payload});
export const actionRemoveCustomer = payload => ({type: REMOVE_CUSTOMER, payload});
