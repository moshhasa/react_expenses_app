import React from "react";
import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({onAddExpense, onCancel}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
   
    onAddExpense({ title: title, amount: +amount, date: new Date(date)});
    setTitle("");
    setAmount("");
    setDate("");
  };

  const titleChangeHandler = e => setTitle(e.target.value);
  const amountChangeHandler = e => setAmount(e.target.value);
  const dateChangeHandler = e => setDate(e.target.value);
  
  return (
    <form  onSubmit={ submitHandler }>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  value={amount} onChange={amountChangeHandler}  />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-13"  value={date} onChange={dateChangeHandler}  />
        </div>
      </div>
      <div  className={styles['new-expense__actions']}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
