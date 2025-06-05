import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav>
      <ul>
        <li className={activeTab === 'react' ? 'active' : ''}>
          <button onClick={() => setActiveTab('react')}>React Tab</button>
        </li>
        <li className={activeTab === 'angular' ? 'active' : ''}>
          <button onClick={() => setActiveTab('angular')}>Angular Tab</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;