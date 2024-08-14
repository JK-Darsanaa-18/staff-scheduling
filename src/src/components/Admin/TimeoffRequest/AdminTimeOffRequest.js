import React, { useState, useEffect } from 'react';

function AdminTimeOffRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch time-off requests from Django backend
    fetch('http://localhost:8000/api/timeoffs/')
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching time-off requests:', error));
  }, []);

  const handleApprove = (requestId) => {
    fetch(`http://localhost:8000/api/timeoffs/${requestId}/`, {
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
    fetch(`http://localhost:8000/api/timeoffs/${requestId}/`, {
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
    <div className="admin-time-off-requests" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Time-Off Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Employee Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Start Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>End Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Reason</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.employeeName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.startDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{request.endDate}</td>
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

export default AdminTimeOffRequest;
