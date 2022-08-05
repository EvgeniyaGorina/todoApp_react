import React from 'react';
import '../UI/Card.css';

function Card(props){
const classes = 'card' + props.className
return <div className={classes}>{props.children}</div>
// props.children are working only with definition of costumer component <Card/> which  i HAVE IN ExpenseItem
}
export default Card;
