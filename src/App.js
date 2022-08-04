import './App.css';
import React from 'react';
import ShoppingList from './ShoppingList';
import ExpenseItem from './components/ExpenseItem';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';
// import ExpenseDate from './components/ExpenseDate';
function App() {

// const expenses = [
//     {
//       id:'e1',
//       title:'nazev auta',
//       amount: 24.2,
//       date: new Date (2021, 5, 12),
//     },
//     {
//       id:'e1',
//       title:'nazev auta 1',
//       amount: 94.2,
//       date: new Date (2020, 7, 12),
//     },
//     {
//       id:'e1',
//       title:'nazev auta 2',
//       amount: 90.2,
//       date: new Date (1998, 3, 2),
//     }
//   ];
  return (



    <div className="Shop"> 
    <h1>Shopping list</h1>





{/* 
    <ExpenseItem
     title={expenses[0].title}
      amount={expenses[0].amount}
         date={expenses[0].date}>
         </ExpenseItem>
         <ExpenseItem
     title={expenses[1].title}
      amount={expenses[1].amount}
         date={expenses[1].date}>
         </ExpenseItem>
         <ExpenseItem
     title={expenses[2].title}
      amount={expenses[2].amount}
         date={expenses[2].date}>
         </ExpenseItem> */}
           {/* <ShopForm/> */}
           <ShopList/>
      <ShoppingList name='NECO' lastName='neco2' />      
    <h1>Text</h1>
    <p>Text2</p>
    </div>
  
  );
}

export default App;
