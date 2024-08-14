import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'; // Add your CSS file for styling

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/admin-login'); // Redirect to the login page after logout
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-header">
        <div className="profile-pic">
          <img 
            src="https://t4.ftcdn.net/jpg/03/25/91/85/360_F_325918530_0MFQE3vsuaIW8W9Kb47fHYTUBRMvZqEP.jpg" 
            alt="Profile" 
          />
        </div>
        <div className="profile-basic-info">
          <h2>John Doe</h2>
          <p>Admin</p>
          <p>john.doe@example.com</p>
        </div>
      </div>
      
      <div className="profile-details">
        <h3>Personal Information</h3>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 Main St, City, Country</p>
        <p><strong>Date of Birth:</strong> January 1, 1985</p>
        <p><strong>Employee ID:</strong> AD123456</p>

        <h3>Professional Details</h3>
        <p><strong>Department:</strong> Human Resources</p>
        <p><strong>Years of Experience:</strong> 10 Years</p>
        <p><strong>Manager:</strong> Jane Smith</p>
        <p><strong>Skills:</strong> Leadership, Communication, Strategic Planning</p>
      </div>
      
      <div className="profile-actions">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
