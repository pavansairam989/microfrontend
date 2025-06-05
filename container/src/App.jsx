import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Navigation from './components/Navigation';

// Lazy load the micro frontends
const ReactApp = lazy(() => import('./components/ReactApp'));
const AngularApp = lazy(() => import('./components/AngularApp'));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('react');
  const [key, setKey] = useState(Date.now());

  const handleLogin = (credentials) => {
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleTabChange = (tab) => {
    // Force cleanup by setting to null first
    setActiveTab('');
    // Generate new key to force remount
    setKey(Date.now());
    // Wait for cleanup to complete
    setTimeout(() => {
      setActiveTab(tab);
    }, 100);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        <Header onLogout={handleLogout} />
        <Navigation activeTab={activeTab} setActiveTab={handleTabChange} />
        
        <div style={{ 
          flex: 1,
          position: 'relative',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}>
          <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
            {activeTab === 'react' && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}>
                <ReactApp />
              </div>
            )}
            {activeTab === 'angular' && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}>
                <AngularApp key={key} />
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;