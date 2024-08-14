import React, { useState } from 'react';
import './Reports.css';

const submittedWork = [
  { id: 1, image: 'https://www.shutterstock.com/image-photo/young-confident-smiling-asian-business-260nw-2177147479.jpg', staffName: 'John Doe', workTitle: 'Monthly Report', dateSubmitted: '2024-07-15' },
  { id: 2, image: 'https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg', staffName: 'Jane Smith', workTitle: 'Project Proposal', dateSubmitted: '2024-07-20' },
  { id: 3, image: 'https://www.shutterstock.com/image-photo/portrait-happy-female-employee-computer-260nw-569789698.jpg', staffName: 'John Doe', workTitle: 'Monthly Report', dateSubmitted: '2024-07-15' },
  { id: 4, image: 'https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg', staffName: 'Jane Smith', workTitle: 'Project Proposal', dateSubmitted: '2024-07-20' },
  { id: 5, image: 'https://www.shutterstock.com/image-photo/profile-picture-head-shot-confident-260nw-2025558893.jpg', staffName: 'John Doe', workTitle: 'Monthly Report', dateSubmitted: '2024-07-15' },
  { id: 6, image: 'https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg', staffName: 'Jane Smith', workTitle: 'Project Proposal', dateSubmitted: '2024-07-20' }
];

const projectAllocations = [
  { id: 1, image: 'https://www.shutterstock.com/image-photo/profile-picture-head-shot-confident-260nw-2025558893.jpg', staffName: 'Jane Smith', projectName: 'Project Beta', role: 'Designer' },
  { id: 2, image: 'https://www.shutterstock.com/image-photo/young-confident-smiling-asian-business-260nw-2177147479.jpg', staffName: 'John Doe', projectName: 'Project Alpha', role: 'Developer' }
];

function Reports() {
  const [workData, setWorkData] = useState(submittedWork);
  const [allocationsData, setAllocationsData] = useState(projectAllocations);

  return (
    <div className='reports-page'>
      <h1>Reports</h1>

      <section className='submitted-work'>
        <h2>Submitted Work</h2>
        <div className="reports-grid">
          {workData.map(work => (
            <div key={work.id} className="report-card">
              <img src={work.image} alt={work.staffName} className="report-image" />
              <h3 className="report-title">{work.workTitle}</h3>
              <p className="report-staff">Staff: {work.staffName}</p>
              <p className="report-date">Date Submitted: {work.dateSubmitted}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='project-allocations'>
        <h2>Project Allocations</h2>
        <div className="reports-grid">
          {allocationsData.map(allocation => (
            <div key={allocation.id} className="report-card">
              <img src={allocation.image} alt={allocation.staffName} className="report-image" />
              <h3 className="report-title">{allocation.projectName}</h3>
              <p className="report-staff">Staff: {allocation.staffName}</p>
              <p className="report-role">Role: {allocation.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reports;
