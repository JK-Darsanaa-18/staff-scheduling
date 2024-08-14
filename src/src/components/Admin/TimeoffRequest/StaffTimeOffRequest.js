import React, { useState, useEffect } from 'react';

function StaffTimeOffRequest() {
  const [requests, setRequests] = useState([]);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

 // Fetch requests from Django backend
useEffect(() => {
  console.log('StaffTimeOffRequest component mounted');

  fetch('http://localhost:8000/api/timeoffs/')  // Make sure this URL matches your Django endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
      setRequests(data);
    })
    .catch(error => console.error('Error fetching time-off requests:', error));
}, []);

// Submit a new time-off request to Django backend
const handleSubmit = (e) => {
  e.preventDefault();

  const newRequest = {
    employeeName: name,
    startDate,
    endDate,
    reason,
    status: 'Pending'
  };

  fetch('http://localhost:8000/api/timeoffs/create/', {  // Make sure this URL matches your Django endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRequest)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Submitted request:', data);
    setRequests(prevRequests => [...prevRequests, data]);
    setName('');
    setStartDate('');
    setEndDate('');
    setReason('');
  })
  .catch(error => console.error('Error submitting time-off request:', error));
};

  return (
    <div className="staff-time-off-request" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Submit Time-Off Request</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="startDate" style={{ marginRight: '10px' }}>Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="endDate" style={{ marginRight: '10px' }}>End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="reason" style={{ marginRight: '10px' }}>Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd', width: '262px', height: '138px' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit Request
        </button>
      </form>

      <h2>My Time-Off Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Start Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>End Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Reason</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.employeeName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.startDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.endDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.reason}</td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: request.status === 'Approved' ? 'green' : request.status === 'Denied' ? 'red' : 'black',
                  fontWeight: 'bold'
                }}
              >
                {request.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StaffTimeOffRequest;
