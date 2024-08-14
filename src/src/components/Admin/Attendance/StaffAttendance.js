import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import './StaffAttendance.css';

function MyAttendance() {
  const [staffData, setStaffData] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/staff/');
        setStaffData(response.data);

        const initialAttendance = {};
        response.data.forEach(staff => {
          initialAttendance[staff.id] = { status: 'Absent', time: '' };
        });
        setAttendanceData(initialAttendance);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, []);

  const handleAttendanceChange = (id, status) => {
    const currentTime = moment().format('HH:mm');
    setAttendanceData(prevState => ({
      ...prevState,
      [id]: { status, time: status === 'Present' ? currentTime : '' },
    }));
  };

  const handleSubmit = async () => {
    try {
      const submissionData = staffData.map(staff => ({
        id: staff.id,
        name: staff.name,
        email: staff.email,
        attendance: attendanceData[staff.id].status,
        date,
        time: attendanceData[staff.id].time,
      }));

      await axios.post('http://localhost:8000/api/attendance/create/', submissionData);
      alert('Attendance submitted successfully');

      const present = staffData.filter(staff => attendanceData[staff.id].status === 'Present');
      const absent = staffData.filter(staff => attendanceData[staff.id].status === 'Absent');

      setPresentCount(present.length);
      setAbsentCount(absent.length);
      setIsSubmitted(true);

      localStorage.setItem('attendanceSummary', JSON.stringify({
        presentStaff: present,
        absentStaff: absent,
        date,
      }));
      
    } catch (error) {
      console.error('Error submitting attendance:', error);
      alert('Failed to submit attendance');
    }
  };

  const handleViewReport = () => {
    navigate('/attendance-report', {
      state: {
        presentStaff: staffData.filter(staff => attendanceData[staff.id].status === 'Present').map(staff => ({
          ...staff,
          time: attendanceData[staff.id].time,
        })),
        absentStaff: staffData.filter(staff => attendanceData[staff.id].status === 'Absent'),
        date,
      },
    });
  };

  return (
    <div className="attendance-container">
      {!isSubmitted ? (
        <>
          <h2>My Attendance</h2>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map(staff => (
                <tr key={staff.id}>
                  <td>{staff.name}</td>
                  <td>{staff.email}</td>
                  <td>
                    <div className="attendance-buttons">
                      <button
                        className={attendanceData[staff.id].status === 'Present' ? 'btn present' : 'btn'}
                        onClick={() => handleAttendanceChange(staff.id, 'Present')}
                        disabled={isSubmitted}
                      >
                        Present
                      </button>
                      <button
                        className={attendanceData[staff.id].status === 'Absent' ? 'btn absent' : 'btn'}
                        onClick={() => handleAttendanceChange(staff.id, 'Absent')}
                        disabled={isSubmitted}
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-attendance-btn" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </>
      ) : (
        <div className="attendance-summary">
          <h2>Attendance Summary</h2>
          <p>Total Present: {presentCount}</p>
          <p>Total Absent: {absentCount}</p>
          <button className="view-report-btn" onClick={handleViewReport}>
            View Report
          </button>
        </div>
      )}
    </div>
  );
}

export default MyAttendance;
