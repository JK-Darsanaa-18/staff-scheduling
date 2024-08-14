import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const StaffSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Signup successful! Redirecting to login...');

    try {
      const response = await axios.post('http://localhost:8000/api/create_user/', formData);
      console.log('Response:', response);  // Debugging line
      setTimeout(() => {
        navigate('/StaffLogin');
      }, 2000);
    } catch (err) {
      console.error('Error:', err);  // Debugging line
      setError('Signup failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="ff">
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Signup</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <p>Already have an account? <Link to="/StaffLogin">Login</Link></p>
      </div>
    </div>
  );
};

export default StaffSignup;