import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <div className="container p-5 my-5 border text-center">
      <h1>Expense Tracker</h1>
      <nav>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Tools
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="sampleData">Load Sample Data</Dropdown.Item>
            <Dropdown.Item href="clearAll">Clear All Expenses</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
