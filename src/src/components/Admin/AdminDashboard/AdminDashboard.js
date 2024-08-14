import React from 'react';
import './AdminDashboard.css';
import { FaUsers, FaCalendarAlt, FaTasks, FaChartBar, FaDollarSign } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const barData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Profit',
        data: [50000, 60000, 75000, 80000, 90000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Loss',
        data: [20000, 15000, 10000, 5000, 10000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Working Efficiency',
        data: [85, 88, 84, 90, 92, 89, 87],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: 'Attendance',
        data: [95, 92, 90, 93, 94, 91, 92],
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card card-blue">
          <FaUsers size={24} />
          <div className="card-info">
            <h3>Staff Members</h3>
            <p>120</p>
          </div>
        </div>
        <div className="card card-green">
          <FaCalendarAlt size={24} />
          <div className="card-info">
            <h3>Upcoming Shifts</h3>
            <p>15</p>
          </div>
        </div>
        <div className="card card-red">
          <FaTasks size={24} />
          <div className="card-info">
            <h3>Pending Tasks</h3>
            <p>8</p>
          </div>
        </div>
        <div className="card card-purple">
          <FaChartBar size={24} />
          <div className="card-info">
            <h3>Performance</h3>
            <p>87% Efficiency</p>
          </div>
        </div>
        <div className="card card-yellow">
          <FaDollarSign size={24} />
          <div className="card-info">
            <h3>Total Payroll</h3>
            <p>₹1,200,000</p>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="bar-chart">
          <h3>Profit & Loss Over Years</h3>
          <Bar data={barData} />
        </div>
        <div className="line-chart">
          <h3>Working Status</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
