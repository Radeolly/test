import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer ={
      name,
      id: Date.now(),
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>add money</button>
        <button onClick={() => getCash(Number(prompt()))}>get money</button>
        <button onClick={() => addCustomer(prompt())}>add client</button>
        <button onClick={() => getCash(Number(prompt()))}>delete client</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div> {customer.name})</div>)}
        </div> 
        :
        <div style={{fontSize:"2rem"}}>
          no clients!
        </div>
      }
    </div>
  );
}

export default App;
