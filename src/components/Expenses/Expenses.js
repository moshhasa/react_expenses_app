import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const expenseFilterChangeHandler = (e) => setFilteredYear(e.target.value);

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear() === +filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpenseFilterChanged={expenseFilterChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items ={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
