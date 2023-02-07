import React, { useState } from 'react';
import './ExpenseItemList.css';
import Card from '../UI/Card.js';
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const ExpenseItemList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filteredArray = props.expenses.filter((expense) => {
        if (expense.date.getFullYear().toString() === filteredYear) { return true; }
        else { return false; }
    });
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterExpense={filterChangeHandler} />
                <ExpensesChart expenses = {filteredArray}/>
                <ExpensesList expenses={filteredArray} />
            </Card >
        </div>
    )
}
export default ExpenseItemList;