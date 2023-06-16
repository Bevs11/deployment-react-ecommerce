import React, {createContext, useState} from 'react'
import { popularProducts } from '../data';

export const ShopContext = createContext(null);

  // Creates the default cart data where all items is 0
const getDefaultCart = () => {  
  let cart = {}
  for (let i=1; i<popularProducts.length + 1; i++ ) {
    cart[i] =0;
  }
  return cart;
};

  //Holds the data of number of per items that is chosen by user
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [viewingId, setViewingId] = useState(1);
  const [userInformation, setUserInformation] = useState({});
  
    // Adds 1 to the number of a particular item
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1} )); 
  };

    //Subtracts 1 to the number of a particular item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1} ))
  };

    //holds the id number that the user wants to check
  const settingId = (id) => {
      setViewingId(id-1);
      console.log(viewingId);
  };

    //Holds data that is inputed by user in Checkout
  const getUserInformation = (user) => {
    setUserInformation(user);
  };

    //Summary of all data within this context
  const contextValue = {cartItems, addToCart, removeFromCart, settingId, viewingId, userInformation, getUserInformation };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;