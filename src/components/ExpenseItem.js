import './ExpenseItem.css';
import './ExpenseDate';
function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 25);
    // const ExpenseTitle = props.title;
    // const ExpenseAmount =props.amount;

    return (
    <div className='expense_item'>
        <div className='expense_item_description'>{props.date.toISOString()}</div>
        <div className='expense_item_price'>${props.amount}</div>
        <h2>{props.title}</h2>
        </div>
        );
}
export default ExpenseItem;