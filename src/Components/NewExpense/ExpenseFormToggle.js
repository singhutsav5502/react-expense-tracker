import React, { useState } from 'react';
import './ExpenseFormToggle.css';
import NewExpense from './NewExpense';
const ExpenseFormToggle = (props) => {
    const [visibility, setVisibility] = useState(false);
    const onCancelButton = () => { setVisibility(false); };
    const newExpenseHandler = () => { setVisibility(true) };
    const onAddExpenseHandler = (expense) => {
        props.onAddExpense(expense);
        setVisibility(false);
    }
    if (visibility === true) { return <NewExpense onCancelButton={onCancelButton} onAddExpense={onAddExpenseHandler} /> }
    else {
        return <div className="new-expense">
            <div className="new-expense__controls" >
                <div className="new-expense__actions">
                    <button className="" onClick={newExpenseHandler}>Add New Expense</button>
                </div>
            </div>
        </div>
    };

};
export default ExpenseFormToggle;