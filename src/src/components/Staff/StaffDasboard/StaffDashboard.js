import './StaffDashboard.css';
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const pieData = {
    labels: ['Marketing', 'Development', 'Design', 'Sales', 'Manufacture'],
    datasets: [
      {
        label: 'Department Distribution',
        data: [20, 30, 25, 25, 15], // Updated values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E57373'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E57373'],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Staff Attendance',
        data: [12, 15, 3, 5, 2, 6, 10, 5],
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="summary-container">
        <div className="summary-box">
          <h3>Total Employees</h3>
          <p>150</p>
        </div>
        <div className="summary-box">
          <h3>Average Attendance</h3>
          <p>85%</p>
        </div>
        <div className="summary-box">
          <h3>Departments</h3>
          <p>5</p>
        </div>
        <div className="summary-box">
          <h3>Projects Completed</h3>
          <p>34</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Department Distribution</h2>
        <div className="pie-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="chart-container">
        <h2>Monthly Staff Attendance</h2>
        <div className="bars-chart">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>John Doe completed the "Marketing Strategy" project.</li>
          <li>HR Department conducted a training session on "Leadership Skills".</li>
          <li>New employee orientation for 10 new hires.</li>
          <li>Monthly review meeting scheduled for August 20th.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
