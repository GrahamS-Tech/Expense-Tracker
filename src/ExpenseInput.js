import React from "react";

export default function ExpenseInput() {
  return (
    <div className="p-5">
      <form>
        <div className="row">
          <div className="col form-floating">
            <input
              className="form-control mb-3"
              id="category"
              type="text"
              placeholder="Select category..."
              name="category"
            ></input>
            <label className="form-label ps-4" htmlFor="category">
              Category
            </label>
          </div>
          <div className="col form-floating">
            <input
              className="form-control mb-3"
              id="location"
              type="tetxt"
              placeholder="Enter location..."
            ></input>
            <label className="form-label ps-4" htmlFor="location">
              Location
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col form-floating">
            <input
              className="form-control mb-3"
              id="amount"
              type="number"
              placeholder="Enter amount..."
            ></input>
            <label className="form-label ps-4" htmlFor="amount">
              Amount
            </label>
          </div>
          <div className="col form-floating">
            <input
              className="form-control mb-3"
              id="date"
              type="date"
              placeholder="Select date..."
            ></input>
            <label className="form-label ps-4" htmlFor="date">
              Date
            </label>
          </div>
        </div>
        <div className="form-floating">
          <input
            className="form-control mb-3"
            id="description"
            type="text"
            placeholder="Enter a description..."
          ></input>
          <label className="form-label" htmlFor="description">
            Description
          </label>
        </div>
        <div>
          <button type="button" className="btn btn-success">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
