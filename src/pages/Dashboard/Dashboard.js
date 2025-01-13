import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
    const navigate=useNavigate()
  const [lineChartData, setLineChartData] = useState({
    labels: [
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
    ],
    datasets: [
      {
        label: "Balance History",
        data: [1000, 1200, 1150, 1400, 1300, 1500, 1600], 
        borderColor: "#5E9732",
        backgroundColor: "rgba(94, 151, 50, 0.2)",
        fill: true,
        tension: 0.4, 
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Deposit",
        data: [100, 200, 150, 250, 300, 400, 350],
        backgroundColor: "#5E9732",
      },
      {
        label: "Withdraw",
        data: [80, 150, 100, 200, 250, 300, 200],
        backgroundColor: "#FF5733",
      },
    ],
  });

  const [pieChartData, setPieChartData] = useState({
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#FF5733", "#33A1FF", "#FFC300", "#8E44AD"],
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleLogout = () => {
navigate("/");
  };

  return (
    <div className="dashboardContainer">
      <Sidebar />
      <div className="mainContent">
        <div className="dashboardHeader">
          <h1>Dashboard</h1>
          <button className="logoutBtn"onClick={handleLogout}>Logout</button>
        </div>

        <div className="chartRow">
          <div className="chartContainer">
            <h3>Weekly Transactions</h3>
            <Bar data={barChartData} options={options} />
          </div>
          <div className="chartContainer">
            <h3>Expense Statistics</h3>
            <Pie data={pieChartData} options={options} />
          </div>
        </div>

        <div className="chartContainer">
          <h3>Balance History (July to January)</h3>
          <Line data={lineChartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
