import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'Project Alpha', status: 'Active', completion: '75%' },
  { id: 2, name: 'Project Beta', status: 'Planning', completion: '20%' },
  { id: 3, name: 'Project Gamma', status: 'Completed', completion: '100%' },
  { id: 4, name: 'Project Delta', status: 'On Hold', completion: '50%' },
];

const App = () => {
  const [projects, setProjects] = useState(dummyData);
  
  return (
    <div className="react-app">
      <h2>React Micro Frontend</h2>
      <div className="projects-container">
        <h3>Projects Dashboard</h3>
        <table className="projects-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>
                  <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </td>
                <td>{project.completion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;