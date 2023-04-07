import React, { useState } from "react";

export default function ExpenseInput(props) {
  const initialInputState = {
    id: 1,
    category: "",
    location: "",
    amount: 0,
    date: "",
    description: "",
    remove: "X",
  };
  const [input, setInput] = useState(initialInputState);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSaveNewExpense(input);
    setInput(initialInputState);
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 form-floating">
            <input
              required
              className="form-control mb-3"
              id="category"
              type="text"
              placeholder="Select category..."
              value={input.category}
              onChange={handleChange}
            ></input>
            <label
              className="form-label ps-4"
              htmlFor="category"
            >
              Category
            </label>
          </div>
          <div className="col-md-6 form-floating">
            <input
              required
              className="form-control mb-3"
              id="location"
              type="tetxt"
              placeholder="Enter location..."
              value={input.location}
              onChange={handleChange}
            ></input>
            <label
              className="form-label ps-4"
              htmlFor="location"
            >
              Location
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 form-floating">
            <input
              required
              className="form-control mb-3"
              id="amount"
              type="number"
              placeholder="Enter amount..."
              value={input.amount}
              onChange={handleChange}
            ></input>
            <label
              className="form-label ps-4"
              htmlFor="amount"
            >
              Amount
            </label>
          </div>
          <div className="col-md-6 form-floating">
            <input
              required
              className="form-control mb-3"
              id="date"
              type="date"
              placeholder="Select date..."
              value={input.date}
              onChange={handleChange}
            ></input>
            <label
              className="form-label ps-4"
              htmlFor="date"
            >
              Date
            </label>
          </div>
        </div>
        <div className="form-floating">
          <input
            required
            className="form-control mb-3"
            id="description"
            type="text"
            placeholder="Enter a description..."
            value={input.description}
            onChange={handleChange}
          ></input>
          <label
            className="form-label"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
