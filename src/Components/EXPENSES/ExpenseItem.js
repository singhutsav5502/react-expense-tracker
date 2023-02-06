import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js'
const ExpenseItem = (props) => {
        const [title , setTitle] = useState(props.title); // Array destructuring

    //     const clickHandler = () => {
    //         setTitle('Updated!!')
    //     }
    //<button onClick={clickHandler}>Change Title</button> */
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

        </Card>
    );
}
export default ExpenseItem; 