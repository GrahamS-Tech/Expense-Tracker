import React from "react";
import { Dropdown } from "react-bootstrap";
import sampleExpenseData from "./sampleExpenseData.json";

export default function Header(props) {
  function loadSampleData() {
    props.sampleData(sampleExpenseData.expenses);
  }

  function clearAllExpenses() {
    props.clearData([]);
  }

  return (
    <div className="container p-3 my-1 border text-center">
      <h1>Expense Tracker</h1>
      <nav className="navbar justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Tools
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={loadSampleData}>
              Load Sample Data
            </Dropdown.Item>
            <Dropdown.Item onClick={clearAllExpenses}>
              Clear All Expenses
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
