import React, { useState } from 'react';
import ExpenseItemList from "./Components/EXPENSES/ExpenseItemList";
import ExpenseFormToggle from "./Components/NewExpense/ExpenseFormToggle"
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return (
        [
          expense,
          ...prevState

        ]);
    });
  };
  
  return (
    <div>
      <ExpenseFormToggle onAddExpense = {addExpenseHandler}/>
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
