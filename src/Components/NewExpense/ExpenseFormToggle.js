import React , {useState} from 'react';
import './ExpenseFormToggle.css';
import NewExpense from './NewExpense';
const ExpenseFormToggle = (props) => {
    const [visibility, setVisibility] = useState(false);
    const onCancelButton = () => { setVisibility(false);};
    const newExpenseHandler =()=>{setVisibility(true)};
    const onAddExpenseHandler = (expense) => {
        props.onAddExpense(expense);
    }
    if(visibility===true){return <NewExpense onCancelButton={onCancelButton} onAddExpense={onAddExpenseHandler} />}
    else{return <button onClick={newExpenseHandler}>Add New Expense</button> };
        
};
export default ExpenseFormToggle;