import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';
import { FaBars, FaBell, FaUserCircle, FaEnvelope } from 'react-icons/fa';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminHome = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="admin-home">
      <header
        className="admin-header"
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div
          className="menu-icon"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </div>
        <div className="header-right">
          <FaBell size={24} className="icon" />
          <FaEnvelope size={24} className="icon" />
          <FaUserCircle size={28} className="icon" onClick={goToProfile} />
        </div>
      </header>

      <AdminSidebar isVisible={isSidebarVisible || isSidebarHovered} />

      <div className="admin-content">
        <h1>Welcome to Admin Site</h1>
        <p>This is the admin portal for the staff scheduling application. Here you can manage employee shifts, approve time-off requests, view shift reports, and much more.</p>
      </div>
    </div>
  );
};

export default AdminHome;
