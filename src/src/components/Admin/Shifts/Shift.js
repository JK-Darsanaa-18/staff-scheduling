import React, { useState } from 'react';
import axios from 'axios';
import './Shift.css';

const Shifts = () => {
  const [shift, setShift] = useState({
    id: '',
    name: '',
    date: '',
    start_time: '',
    end_time: '',
    location: '',
    required_staff: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShift({
      ...shift,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timePattern.test(shift.start_time) || !timePattern.test(shift.end_time)) {
      alert('Please enter the start and end times in the correct format: HH:mm (e.g., 09:00)');
      return;
    }
    console.log('Shift added:', shift);

    // Prepare the payload without staff data
    axios.post('http://localhost:8000/api/shifts/create/', shift)
      .then(response => {
        console.log('Shift added:', response.data);
        setShift({
          id: '',
          name: '',
          date: '',
          start_time: '',
          end_time: '',
          location: '',
          required_staff: ''
        });
      })
      .catch(error => {
        console.error('There was an error adding the shift!', error.response);
        if (error.response && error.response.data) {
          alert(`Error: ${JSON.stringify(error.response.data)}`);
        }
      });
  };

  return (
    <div className="shift-form-wrapper">
      <div className="shift-form-container">
        <h1>Add New Shift</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID:</label>
            <input
              type="number"
              name="id"
              value={shift.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={shift.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={shift.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Start Time:</label>
            <input
              type="text"
              name="start_time"
              value={shift.start_time}
              onChange={handleChange}
              required
              placeholder="e.g., 09:00"
            />
          </div>
          <div>
            <label>End Time:</label>
            <input
              type="text"
              name="end_time"
              value={shift.end_time}
              onChange={handleChange}
              required
              placeholder="e.g., 17:00"
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={shift.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Required Staff:</label>
            <input
              type="number"
              name="required_staff"
              value={shift.required_staff}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Add Shift</button>
        </form>
      </div>
    </div>
  );
};

export default Shifts;
