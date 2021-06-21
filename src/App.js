import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {addCustomerAction, removeCustomerAction} from './store/customer_reducer';
import { fetchCustomers } from './asyncAction/customers';
import { AddPostForm } from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

  useEffect(()=>{},[])

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>add money</button>
        <button onClick={() => getCash(Number(prompt()))}>get money</button>
        <button onClick={() => addCustomer(prompt())}>add client</button>
        <button onClick={() => getCash(Number(prompt()))}>delete client</button>
        <button onClick={() => dispatch(fetchCustomers())}>add clientss</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div
              onClick={() => removeCustomer(customer)}
              style={{ fontSize: "2rem", border: '1px solid black', padding: "10px", marginTop: 5 }}
            >
              {customer.name}
            </div>)}
        </div>
        :
        <div style={{ fontSize: "2rem" }}>
          no clients!
        </div>
      }
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
