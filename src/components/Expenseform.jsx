import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    addExpense({
      title,
      amount,
      date,
      category,
      description,
    });

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Food");
    setDescription("");
  };

  return (
    <div className="card p-4 mb-4 shadow">
      <h3 className="mb-3">Add Expense</h3>

      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Expense Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Entertainment</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-primary w-100">
              Add Expense
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;