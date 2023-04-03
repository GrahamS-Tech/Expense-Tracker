import React, { useState, useEffect } from "react";
import Header from "./Header";
import ExpenseInput from "./ExpenseInput";
import ExpenseTable from "./ExpenseTable";
import Chart from "./Chart";

export default function App() {
  const [rows, setRows] = useState(
    JSON.parse(localStorage.getItem("rows")) || []
  );

  function addExpense(row) {
    let idMax = 1;
    if (rows.length !== 0) {
      idMax =
        Math.max.apply(
          {},
          rows.map((a) => a.id)
        ) + 1;
      row.id = idMax;
    }
    setRows([...rows, row]);
  }

  function sampleData(data) {
    setRows(data);
  }

  function clearData(data) {
    setRows(data);
  }

  function deleteExpense(expenseId) {
    const updatedRows = rows.filter((data) => data.id !== Number(expenseId));
    console.log(updatedRows);
    setRows(updatedRows);
  }

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  return (
    <div className="container">
      <Header sampleData={sampleData} clearData={clearData} />
      <ExpenseInput onSaveNewExpense={addExpense} />
      <div>
        <ExpenseTable rows={rows} onDeleteExpense={deleteExpense} />
        <Chart />
      </div>
    </div>
  );
}
