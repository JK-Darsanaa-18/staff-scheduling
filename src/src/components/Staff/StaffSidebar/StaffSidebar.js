import React from 'react';
import { Link } from 'react-router-dom';
import './StaffSidebar.css'; // Ensure this CSS file is created

const StaffSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`staff-sidebar-container ${isOpen ? 'open' : 'closed'}`}>
      <button className="staff-close-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i> {/* FontAwesome close icon */}
      </button>
      <aside className={`staff-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><Link to="/staff-dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
          <li><Link to="/schedules" onClick={toggleSidebar}>Schedule</Link></li>
          <li><Link to="/timeoffs" onClick={toggleSidebar}>TimeOffRequests</Link></li>
          <li><Link to="/calendar" onClick={toggleSidebar}>Upcoming Shifts</Link></li>
          <li><Link to="/staff-swaps" onClick={toggleSidebar}>Shift Swaps</Link></li>
          <li><Link to="/projectsubmit" onClick={toggleSidebar}>Reports</Link></li>
          <li><Link to="/StaffLogin" onClick={toggleSidebar}>Logout</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default StaffSidebar;
