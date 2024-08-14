import React, { useState, useEffect } from 'react';
import './StaffLogin.css';
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = 'login-page';
    return () => { document.body.className = ''; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/read_users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const users = await response.json();

      const user = users.find(user => user.email === email);
      if (user && user.password === password) {
        setSuccess('Login successful!');
        setError('');
        navigate('/home');
      } else {
        setError('Invalid email or password.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred.');
      setSuccess('');
    }
  };

  return (
    <div className="ff">
      <div className="form-container">
        <h2>Staff Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>
  );
};

export default StaffLogin;