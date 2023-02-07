import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseItemList.css';
import Card from '../UI/Card.js';
import ExpensesFilter from "./ExpensesFilter.js";
const ExpenseItemList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filteredArray = props.expenses.filter((expense) => {
        if (expense.date.getFullYear() == filteredYear) { return true; }
        else { return false; }
    });
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected = {filteredYear} onFilterExpense={filterChangeHandler} />
                {filteredArray.map((expense) => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                })}
            </Card >
        </div>
    )
}
export default ExpenseItemList;