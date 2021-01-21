import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import CartItemsJson from './cart-items';
import Reducer from './reducers'

//initial store
const initialStore = {
	count: 13,
	cart: CartItemsJson,
	amount: 100
}

const App = () => {
	return (
    	<Provider store={createStore(Reducer, initialStore)}>
      		<Navbar />
      		<CartContainer />
    	</Provider>
  	);
}

export default App;
