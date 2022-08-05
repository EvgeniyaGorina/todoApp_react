import './App.css';
import React from 'react';
import ShoppingList from './ShoppingList';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ShopForm from './components/Shop_todo/ShopForm';
import ShopList from './components/Shop_todo/ShopList';
import Expenses from './components/Expenses/Expenses';
// import Card from './components/Card';
// import ExpenseDate from './components/ExpenseDate';
const App = () => {

const expenses = [
    {
      id:'e1',
      title:'nazev auta',
      amount: 24.2,
      date: new Date (2021, 5, 12),
    },
    {
      id:'e1',
      title:'nazev auta 1',
      amount: 94.2,
      date: new Date (2020, 7, 12),
    },
    {
      id:'e1',
      title:'nazev auta 2',
      amount: 90.2,
      date: new Date (1998, 3, 2),
    }
  ];
  return (
    <div className="Shop"> 
    {/* <h1>Shopping list</h1> */}
           {/* <ShopForm/> */}
           <ShopList/>
           <Expenses items ={expenses}/>
      {/* <ShoppingList name='NECO' lastName='neco2' />      
    <h1>Text</h1>
    <p>Text2</p> */}
    </div>
  
  );
}

export default App;
