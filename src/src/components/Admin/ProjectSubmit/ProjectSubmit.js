import React, { useState } from 'react';
import './ProjectSubmit.css';
// import Sidebar from '../Navbar/Navbar'; // Remove this if you are not using Sidebar

const ProjectSubmit = () => {
  const [projectName, setProjectName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  // const [sidebarOpen, setSidebarOpen] = useState(false); // Remove this if you are not using Sidebar

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('title', title);
    formData.append('description', description);
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // Submit the form data to db.json or backend
    try {
      const response = await fetch('http://localhost:3001/projects', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Your Project has been submitted successfully');
        // Reset form fields
        setProjectName('');
        setTitle('');
        setDescription('');
        setFiles([]);
      } else {
        alert('Failed to submit the project');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the project');
    }
  };

  // const toggleSidebar = () => {
  //   setSidebarOpen(prevState => !prevState);
  // };

  return (
    <div className="projectsub-container">
      {/* Remove Sidebar and toggle button */}
      {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {/* <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button> */}
      <h2 className="projectsub-title">Add Project Reports</h2>
      <form onSubmit={handleSubmit} className="projectsub-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="files">Project Files</label>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ProjectSubmit;
