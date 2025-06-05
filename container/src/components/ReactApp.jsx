import React from 'react';

const ReactApp = () => {
  const ReactAppMFE = React.lazy(() => import('reactApp/App'));
  
  return (
    <div style={{ 
      height: '100%', 
      width: '100%',
      position: 'relative',
      overflow: 'auto'
    }}>
      <React.Suspense fallback={<div style={{ padding: '20px' }}>Loading React App...</div>}>
        <ReactAppMFE />
      </React.Suspense>
    </div>
  );
};

export default ReactApp;