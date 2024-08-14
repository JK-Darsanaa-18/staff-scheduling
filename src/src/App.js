import AdminLogin from './AdminLogin';
import React, { useState } from 'react';
import './App.css';
import Homes from './Homes';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import StaffLogin from './components/Staff/StaffLogin/StaffLogin';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminSidebar from './components/Admin/AdminSidebar/AdminSidebar';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import StaffHome from './StaffHome';
import StaffSidebar from './components/Staff/StaffSidebar/StaffSidebar';
import StaffDetails from './components/Admin/StaffDetails/StaffDetails';
import StaffTable from './components/Admin/StaffDetails/StaffTable';
import StaffAttendance from './components/Admin/Attendance/StaffAttendance';
import AttendanceReport from './components/Admin/Attendance/AttendanceReport';
import AdminTimeOffRequest from './components/Admin/TimeoffRequest/AdminTimeOffRequest';
import StaffTimeOffRequest from './components/Admin/TimeoffRequest/StaffTimeOffRequest';
import StaffDashboard from './components/Staff/StaffDasboard/StaffDashboard';
import ProjectSubmit from './components/Admin/ProjectSubmit/ProjectSubmit';
import Shifts from './components/Admin/Shifts/Shift';
import Schedule from './components/Schedules/Schedule';
import Reports from './components/Admin/Reports/Reports';
import Settings from './components/Admin/Settings/Settings';
import ProfilePage from './ProfilePage';
import ShiftCalendar from './components/Staff/ShiftCalendar/ShiftCalendar';
import StaffShiftSwapRequest from './StaffShiftSwap';
import AdminShiftSwapManagement from './AdminShiftSwap';
import StaffSignup from './components/Staff/StaffLogin/StaffSignup';
const App = () => {
  const [staffData, setStaffData] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      age: 28, 
      gender: 'Male',
      phoneNo: '123-456-7890', 
      address: '123 Main St', 
      shift: 'Day', 
      dob: '1995-06-15', 
      email: 'john.doe@example.com'
    },
    // Add other initial staff data here...
  ]);
  const [editingStaff, setEditingStaff] = useState(null);

  const handleEdit = (id) => {
    const staff = staffData.find(staff => staff.id === id);
    setEditingStaff(staff);
  };

  const handleDelete = (id) => {
    setStaffData(staffData.filter(staff => staff.id !== id));
  };

  const handleAdd = (newStaff) => {
    setStaffData([...staffData, { ...newStaff, id: Date.now() }]);
  };

  const handleUpdate = (updatedStaff) => {
    setStaffData(staffData.map(staff => staff.id === updatedStaff.id ? updatedStaff : staff));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-sidebar" element={<AdminSidebar />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route 
            path="/staff-details" 
            element={
              <StaffDetails 
                staffData={staffData} 
                setStaffData={setStaffData} 
                editingStaff={editingStaff} 
                handleAdd={handleAdd} 
                handleUpdate={handleUpdate} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
              />
            } 
          />
          <Route 
            path="/staff-table" 
            element={
                <StaffTable 
                  staffData={staffData} 
                  handleEdit={handleEdit} 
                  handleDelete={handleDelete} 
                />}/>
          <Route path="/staff-attendance" element={<StaffAttendance />} />
          <Route path="/attendance-report" element={<AttendanceReport/>} />
          <Route path="/admin/timeoffs" element={<AdminTimeOffRequest/>} />
          <Route path="/addshifts" element={<Shifts/>} />
          <Route path="/schedules" element={<Schedule/>} />
          <Route path="/timeoffs" element={<StaffTimeOffRequest/>} />
          <Route path="/admin-swaps" element={<AdminShiftSwapManagement/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/StaffSignup" element={<StaffSignup/>} />
          <Route path="/home" element={<StaffHome />} />
          <Route path="/staff-sidebar" element={<StaffSidebar />} />
          <Route path="/staff-dashboard" element={<StaffDashboard/>} />
          <Route path="/calendar" element={<ShiftCalendar/>} />
          <Route path="/staff-swaps" element={<StaffShiftSwapRequest/>} />
          <Route path="/projectsubmit" element={<ProjectSubmit/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
