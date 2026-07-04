import React from "react";

function ExpenseList({ expenses = [], deleteExpense }) {
  return (
    <div className="card p-3 mb-4 shadow">
      <h4 className="mb-3">Expense List</h4>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Expense</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No Expenses Added
              </td>
            </tr>
          ) : (
            expenses.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>₹{item.amount}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteExpense(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;