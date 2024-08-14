import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

function AttendanceReport() {
  const location = useLocation();
  const navigate = useNavigate();
  const { presentStaff, absentStaff, date } = location.state || { presentStaff: [], absentStaff: [], date: moment().format('YYYY-MM-DD') };

  const handleBackToHome = () => {
    navigate('/'); // Adjust the route to match your home page path
  };

  return (
    <div className="ar-attendance-report" style={{ height: '100vh', width: '100%', fontFamily: 'Arial, sans-serif', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="ar-report-title" style={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Attendance Report for {date}</h2>
      
      <div className="ar-present-staff" style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h3 className="ar-section-title" style={{ marginBottom: '10px' }}>Present Employees</h3>
        <table className="ar-staff-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="ar-table-header" style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#52c8e8', color: '#fff', textAlign: 'left' }}>Name</th>
              <th className="ar-table-header" style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#52c8e8', color: '#fff', textAlign: 'left' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {presentStaff.map(staff => (
              <tr key={staff.id}>
                <td className="ar-table-cell" style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{staff.name}</td>
                <td className="ar-table-cell" style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{staff.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ar-absent-staff" style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h3 className="ar-section-title" style={{ marginBottom: '10px' }}>Absent Employees</h3>
        <table className="ar-staff-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="ar-table-header" style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#52c8e8', color: '#fff', textAlign: 'left' }}>Name</th>
              <th className="ar-table-header" style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#52c8e8', color: '#fff', textAlign: 'left' }}>Date of Absence</th>
            </tr>
          </thead>
          <tbody>
            {absentStaff.map(staff => (
              <tr key={staff.id}>
                <td className="ar-table-cell" style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{staff.name}</td>
                <td className="ar-table-cell" style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        className="ar-view-report-button" 
        style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px', marginTop: '20px' }}
        onClick={handleBackToHome}
      > Back to home
      </button>
    </div>
  );
}

export default AttendanceReport;
