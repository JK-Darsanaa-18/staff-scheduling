import React, { useState } from "react";
import { FaBell, FaEnvelope, FaUser, FaBars } from "react-icons/fa";
import StaffSidebar from "./components/Staff/StaffSidebar/StaffSidebar"; // Import your StaffSidebar component
import "./StaffHome.css";

const StaffHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="staff-home-container">
      <header className="staff-home-header">
        <div className="header-left">
          <FaBars 
            className="menu-icon"
            onClick={toggleSidebar} // Toggle sidebar on click
          />
        </div>
        <div className="header-right">
          <FaBell className="notification-icon" />
          <FaEnvelope className="mail-icon" />
          <FaUser className="profile-icon" />
        </div>
      </header>

      <StaffSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Sidebar component */}

      <main className="staff-home-content">
        <div className="ent">
        <h1 className="ent">Welcome to the Employee Site</h1>
        <p>
          We are thrilled to have you here! This platform is designed to help you
          manage your shifts, request time off, and stay updated with the latest
          notifications. Our goal is to make your work experience as smooth and
          efficient as possible.
        </p>
        </div>
      </main>
    </div>
  );
};

export default StaffHome;
