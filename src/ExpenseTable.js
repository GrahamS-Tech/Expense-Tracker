import React from "react";

export default function ExpenseTable(props) {
  const items = props;

  function tableRows() {
    if (items.rows.length === undefined || items.rows.length === 0) {
      return <tr></tr>;
    } else {
      return items.rows.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.category}</td>
          <td>{item.location}</td>
          <td>${Number(item.amount).toFixed(2)}</td>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td className="text-center">
            <button
              id={item.id}
              onClick={handleDelete}
              className="btn btn-sm btn-danger"
            >
              {item.remove}
            </button>
          </td>
        </tr>
      ));
    }
  }
  function handleDelete(e) {
    props.onDeleteExpense(e.target.id);
  }

  return (
    <div
      className="table-responsive-sm overflow-scroll"
      style={{ maxHeight: "40pc" }}
    >
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody id="table-body">{tableRows()}</tbody>
      </table>
    </div>
  );
}
