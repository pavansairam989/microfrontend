import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount function for standalone development
const mount = () => {
  const container = document.getElementById('react-app-root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

// If we're in development and running the app in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#react-app-root');
  if (devRoot) {
    mount();
  }
}

// We're exporting the mount function for integration with the container
export { mount };