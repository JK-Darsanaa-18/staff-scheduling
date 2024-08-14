import React, { useState, useEffect } from 'react';

function StaffShiftSwapRequest() {
  const [yourEmailID, setYourEmailID] = useState('');
  const [yourName, setYourName] = useState('');
  const [swapWithEmailID, setSwapWithEmailID] = useState('');
  const [swapWithName, setSwapWithName] = useState('');
  const [reason, setReason] = useState('');
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch existing shift swap requests from the server
    fetch('http://localhost:8000/api/shiftswaps/')
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching shift swap requests:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      yourEmailID,
      yourName,
      swapWithEmailID,
      swapWithName,
      reason,
      status: 'Pending'
    };

    fetch('http://localhost:8000/api/shiftswaps/create/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Submitted swap request:', data);
        // Clear fields after submission
        setYourEmailID('');
        setYourName('');
        setSwapWithEmailID('');
        setSwapWithName('');
        setReason('');
        // Update requests list with new request
        setRequests([...requests, data]);
      })
      .catch(error => console.error('Error submitting swap request:', error));
  };

  const getStatusColor = (status) => {
    if (status === 'Approved') return 'green';
    if (status === 'Denied') return 'red';
    return 'black'; // Default color for pending or other statuses
  };

  return (
    <div className="staff-shift-swap-request" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Shift Swap Request</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="yourEmailID" style={{ marginRight: '10px' }}>Your Email ID</label><br></br>
          <input
            type="email"
            id="yourEmailID"
            value={yourEmailID}
            onChange={e => setYourEmailID(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="yourName" style={{ marginRight: '10px' }}>Your Name</label><br></br>
          <input
            type="text"
            id="yourName"
            value={yourName}
            onChange={e => setYourName(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="swapWithEmailID" style={{ marginRight: '10px' }}>Swap With Email ID</label><br></br>
          <input
            type="email"
            id="swapWithEmailID"
            value={swapWithEmailID}
            onChange={e => setSwapWithEmailID(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="swapWithName" style={{ marginRight: '10px' }}>Swap With Name</label><br></br>
          <input
            type="text"
            id="swapWithName"
            value={swapWithName}
            onChange={e => setSwapWithName(e.target.value)}
            required
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="reason" style={{ marginRight: '10px' }}>Reason for Swapping</label><br></br>
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

      <h2>Submitted Shift Swap Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Your Email ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Your Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Swap With Email ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Swap With Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Reason</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.yourEmailID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.yourName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.swapWithEmailID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.swapWithName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.reason}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', color: getStatusColor(request.status) }}>
                {request.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StaffShiftSwapRequest;