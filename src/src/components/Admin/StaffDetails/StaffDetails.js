import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './StaffDetails.css';

function StaffDetails({ staffData, setStaffData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const editingStaff = location.state ? location.state.editingStaff : null;

  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    id: '',
    name: '',
    age: '',
    gender: 'Male',
    phoneNo: '',
    address: '',
    shift: 'Day',
    dob: '',
    email: ''
  });

  useEffect(() => {
    if (editingStaff) {
      setForm({
        id: editingStaff.id,
        name: editingStaff.name,
        age: editingStaff.age,
        gender: editingStaff.gender,
        phoneNo: editingStaff.phoneNo,
        address: editingStaff.address,
        shift: editingStaff.shift,
        dob: editingStaff.dob,
        email: editingStaff.email
      });
      setFormVisible(true);
    }
  }, [editingStaff]);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/staff/');
        setStaffData(response.data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, [setStaffData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        // Update existing staff
        await axios.put(`http://localhost:8000/api/staff/${form.id}/update/`, form);
        setStaffData(staffData.map(staff => staff.id === form.id ? form : staff));
      } else {
        // Add new staff
        const response = await axios.post('http://localhost:8000/api/staff/create/', form);
        setStaffData([...staffData, response.data]);
      }
      setForm({
        id: '',
        name: '',
        age: '',
        gender: 'Male',
        phoneNo: '',
        address: '',
        shift: 'Day',
        dob: '',
        email: ''
      });
      setFormVisible(false);
      navigate('/staff-table');
    } catch (error) {
      console.error('Error handling the form submission:', error);
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="staff-details-container">
      <h2>Staff Details</h2>
      {!formVisible && (
        <div className="initial-buttons">
          <button className="action-btn" onClick={() => navigate('/staff-table')}>
            View Staff Details
          </button>
          <button className="action-btn" onClick={toggleFormVisibility}>
            Add Staff
          </button>
        </div>
      )}
      {formVisible && (
        <div className="add-edit-form">
          <h3>{form.id ? 'Edit Staff' : 'Add New Staff'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shift">Shift</label>
              <select
                id="shift"
                name="shift"
                value={form.shift}
                onChange={handleChange}
                required
              >
                <option value="Day">Day</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit">{form.id ? 'Update Staff' : 'Add Staff'}</button>
              <button type="button" onClick={() => navigate('/staff-table')}>View Staff Details</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default StaffDetails;
