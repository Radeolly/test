import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    cash:10,
  }  

  export const cash = createSlice({
    name: "cash",
    initialState: defaultState,
    reducers: {
      cashAdded: (state, action) => {
        state.cash+=action.payload;
      },
  
      cashGet: (state, action) => {
        state.cash-=action.payload;
      }
    }
  });
  
  export const { cashAdded, cashGet } = cash.actions;
  
  export const selectCount = (state) => state.counter.value;
  
  export default cash.reducer;
  

// export const cashReducer = (state = defaultState, action) => {
//     switch (action.type) {
//       case "ADD_CASH":
//         return {...state, cash: state.cash + action.payload}
//       case "GET_CASH":
//         return {...state, cash: state.cash - action.payload}
//       default:
//         return state
//     }
//   }
//  