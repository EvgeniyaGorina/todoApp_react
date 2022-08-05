import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 25);
    // const ExpenseTitle = props.title;
    // const ExpenseAmount =props.amount;

    return (
    <Card className='expense_item'>
        <div className='expense_item_description'>{props.date.toISOString()}</div>
        <div className='expense_item_price'>${props.amount}</div>
        <h2>{props.title}</h2>
        </Card>
        );
}
export default ExpenseItem;