import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const toggleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleChangePassword = () => {
    // Logic to change the password goes here

    // Display the success message
    setPasswordChanged(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setPasswordChanged(false);
    }, 3000);
  };

  const handleResetPassword = () => {
    // Logic to send a reset password email goes here
    // Simulate email sending
    setResetEmailSent(true);
    // Hide the email sent message after 3 seconds
    setTimeout(() => {
      setResetEmailSent(false);
    }, 3000);
  };

  return (
    <div className='settings-page'>
      <h1>Settings</h1>

      <section className='settings-section'>
        <h2>Account Settings</h2>
        <div className='settings-item'>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' placeholder='Admin Username' />
        </div>
        <div className='settings-item'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='admin@example.com' />
        </div>
        <div className='settings-item'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            placeholder='New Password'
            onBlur={handleChangePassword}
          />
          {passwordChanged && (
            <p className='success-message'>Password changed successfully!</p>
          )}
        </div>
        <button className='reset-password-btn' onClick={handleResetPassword}>
          Reset Password
        </button>
        {resetEmailSent && (
          <p className='success-message'>Reset password email sent successfully!</p>
        )}
      </section>

      <section className='settings-section'>
        <h2>Notifications</h2>
        <div className='settings-item'>
          <label htmlFor='email-notifications'>Email Notifications</label>
          <label className='toggle-switch'>
            <input
              type='checkbox'
              id='email-notifications'
              checked={emailNotifications}
              onChange={toggleEmailNotifications}
            />
            <span className='slider'></span>
          </label>
        </div>
      </section>
      <button className='save-settings-btn'>Save Changes</button>
    </div>
  );
};

export default Settings;
