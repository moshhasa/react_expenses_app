import React from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
import { useState } from "react";

const NewExpense = ({ onAaddExpense }) => {
  const [showForm, setShowFrom] = useState(false);
  
  const startEditing = () => setShowFrom(true);
  const stopEditing = () => setShowFrom(false);

  const addExpenseHandler = (expense) => {
      onAaddExpense(expense);
      setShowFrom(false);
  }

  return (
    <div className={styles['new-expense']}>
      {showForm ? (
        <ExpenseForm onAddExpense={addExpenseHandler} onCancel={stopEditing} />
      ) : (
        <button onClick={startEditing}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
