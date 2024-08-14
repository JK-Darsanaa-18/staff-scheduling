import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaffTable from './StaffTable';
import StaffDetails from './StaffDetails';

const initialStaffData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    phoneNo: '123-456-7890',
    address: '123 Main St, Springfield',
    shift: 'Day',
    dob: '1993-01-15',
    email: 'johndoe@example.com'
  }
];

function StaffManagement() {
  const [staffData, setStaffData] = useState(initialStaffData);
  const [editingStaff, setEditingStaff] = useState(null);

  const handleEdit = (id) => {
    const staff = staffData.find((staff) => staff.id === id);
    setEditingStaff(staff);
  };

  const handleDelete = (id) => {
    setStaffData(staffData.filter((staff) => staff.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/staff-table"
          element={<StaffTable staffData={staffData} handleEdit={handleEdit} handleDelete={handleDelete} />}
        />
        <Route
          path="/staff-details"
          element={<StaffDetails staffData={staffData} setStaffData={setStaffData} editingStaff={editingStaff} />}
        />
      </Routes>
    </Router>
  );
}

export default StaffManagement;
