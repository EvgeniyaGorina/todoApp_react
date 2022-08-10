import './App.css';
import React from 'react';
import ShopList from './components/Shop_todo/ShopList';

const App = () => {
  return (
    <div className="Shop"> 
    {/* <h1>Shopping list</h1> */}
           {/* <ShopForm/> */}
           <ShopList/>
           
      {/* <ShoppingList name='NECO' lastName='neco2' />      
    <h1>Text</h1>
    <p>Text2</p> */}
    </div>
  
  );
}

export default App;
