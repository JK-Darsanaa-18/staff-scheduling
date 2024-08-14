import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';
import { FaTachometerAlt, FaUsers, FaCalendarAlt, FaCog, FaBriefcase, FaTasks, FaChartBar, FaPlus,FaRegClock } from 'react-icons/fa';

const AdminSidebar = ({ isVisible }) => {
  return (
    <div className={`admin-sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-logo">
        <h2>Admin Panel</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin-dashboard">
              <FaTachometerAlt size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/staff-details">
              <FaUsers size={20} />
              <span>Staff Details</span>
            </Link>
          </li>
          <li>
            <Link to="/staff-attendance">
              <FaCalendarAlt size={20} />
              <span>Attendance</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/timeoffs">
              <FaRegClock size={20} />
              <span>TimeOffRequest</span>
            </Link>
          </li>
          <li>
            <Link to="/schedules">
              <FaTasks size={20} />
              <span>Schedules</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
            <FaCalendarAlt size={20} />
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/addshifts">
              <FaPlus size={20} />
              <span>Add Shift</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-swaps">
              <FaPlus size={20} />
              <span>Shift Swaps</span>
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <FaChartBar size={20} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
