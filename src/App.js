import React, { Component } from "react";
import Header from "./Header";
import ExpenseInput from "./ExpenseInput";
import ExpenseTable from "./ExpenseTable";
import Chart from "./Chart";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
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
}

export default App;
