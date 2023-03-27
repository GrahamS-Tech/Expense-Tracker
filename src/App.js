import React, { Component } from "react";
import Header from "./Header";
import ExpenseInput from "./ExpenseInput";
import ExpenseTable from "./ExpenseTable";
import Chart from "./Chart";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <ExpenseInput />
      <div>
        <ExpenseTable />
        <Chart />
      </div>
    </div>
  );
}
