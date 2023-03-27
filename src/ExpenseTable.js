import React from "react";

export default function ExpenseTable() {
  return (
    <div className="table-responsive-lg">
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  );
}
