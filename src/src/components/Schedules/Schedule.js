import React, { useEffect, useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    // Fetch shifts data from the backend
    fetch('http://localhost:8000/api/shifts')
      .then((response) => response.json())
      .then((data) => setShifts(data))
      .catch((error) => console.error('Error fetching shifts:', error));
  }, []);

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Location</th>
            <th>Required Staff</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.id}</td>
              <td>{shift.name}</td>
              <td>{shift.date}</td>
              <td>{shift.start_time}</td> {/* Start Time Column */}
              <td>{shift.end_time}</td> {/* End Time Column */}
              <td>{shift.location}</td>
              <td>{shift.required_staff}</td> {/* Required Staff Column */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
