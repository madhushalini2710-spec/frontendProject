import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ LocalStorage expenses
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to LocalStorage automatically
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete Expense
  const deleteExpense = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  // Total Expense
  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalIncome = 50000;
  const balance = totalIncome - totalExpense;
  const savings = balance;

  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      {/* LOGIN PAGE */}
      {!isLoggedIn ? (
        <div>
          <Login setIsLoggedIn={setIsLoggedIn} />
          <Register />
        </div>
      ) : (
        <div className="container mt-4">

          <h2 className="text-center text-primary mb-4">
            Expense Tracker
          </h2>

          <Dashboard
            income={totalIncome}
            expense={totalExpense}
            balance={balance}
            savings={savings}
          />

          <ExpenseForm addExpense={addExpense} />

          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />

        </div>
      )}

      <Footer />
    </>
  );
}

export default App;