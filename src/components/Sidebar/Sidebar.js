import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h3>BankDash.</h3>
      </div>
      <div className="sidebarLinks">
        <ul>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#transactions">Transactions</a>
          </li>
          <li>
            <a href="#account">Account</a>
          </li>
          <li>
            <a href="#investments">Investments</a>
          </li>
          <li>
            <a href="#creditCards">Credit Cards</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
