import React, { useState, useEffect } from 'react';

function AdminShiftSwapManagement() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch shift swap requests from the server
    fetch('http://localhost:8000/api/shiftswaps/')
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching shift swap requests:', error));
  }, []);

  const handleApprove = (requestId) => {
    // Handle approval logic
    fetch(`http://localhost:8000/api/shiftswaps/${requestId}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(response => response.json())
      .then(updatedRequest => {
        setRequests(prevRequests => prevRequests.map(req => req.id === requestId ? updatedRequest : req));
      })
      .catch(error => console.error('Error approving request:', error));
  };

  const handleDeny = (requestId) => {
    // Handle denial logic
    fetch(`http://localhost:8000/api/shiftswaps/${requestId}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Denied' })
    })
      .then(response => response.json())
      .then(updatedRequest => {
        setRequests(prevRequests => prevRequests.map(req => req.id === requestId ? updatedRequest : req));
      })
      .catch(error => console.error('Error denying request:', error));
  };

  return (
    <div className="admin-shift-swap-management" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Shift Swap Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Your Email ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Your Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Swap With Email ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Swap With Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Reason</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Actions</th>
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
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => handleApprove(request.id)} style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Approve</button>
                <button onClick={() => handleDeny(request.id)} style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminShiftSwapManagement;
