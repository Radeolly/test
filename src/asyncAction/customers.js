import { addManyCustomersAction } from "../store/customer_reducer"

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}