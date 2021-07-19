import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  customers: [{
    name:"dslj",
    id: Date.now(),
  }],
}

export const customer = createSlice({
  name: "customer",
  initialState: defaultState,
  reducers: {
    customerAdded(state, action) {
      state.customers.push(action.payload);
    },

    customerRemoved(state, action) {
      state.customers=state.customers.filter((elem) => elem.id !== action.payload);
    },

    addManyCustomersAction(state,action){
      state.customers.concat(action.payload)
    }
  }
});

export const { customerAdded, customerRemoved,addManyCustomersAction } = customer.actions;

export const selectCount = (state) => state.counter.value;

export default customer.reducer;

// const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
// const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

//  export const customerReducer = (state = defaultState, action) => {
//     switch (action.type) {
//       case ADD_MANY_CUSTOMERS:
//         return {...state, customers:[...state.customers, ...action.payload]}
//       case ADD_CUSTOMER:
//         return {...state, customers: [...state.customers, action.payload]}
//       case REMOVE_CUSTOMER:
//         return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
//       case "GET_USERS":
//         return {...state}
//       default:
//         return state
  //   }
  // }

//   export const addCustomerAction = (payload) => ({type:ADD_CUSTOMER, payload })
// //   export const removeCustomerAction = (payload) => ({type:REMOVE_CUSTOMER, payload })
// export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })