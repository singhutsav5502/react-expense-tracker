import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseItemList.css';
import Card from '../UI/Card.js';
import ExpensesFilter from "./ExpensesFilter.js";
const ExpenseItemList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>

            <Card className="expenses">
                {props.expenses.map((expense)=> {
                   return <ExpenseItem title={expense.title} amount = {expense.amount} date={expense.date} />
                })}
            </Card >
        </div>
    )
}
export default ExpenseItemList;