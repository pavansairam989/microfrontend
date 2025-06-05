import React, { useRef, useEffect } from 'react';

const AngularApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    let angularInstance = null;

    const mountAngular = async () => {
      try {
        // Clean up any existing content first
        if (ref.current) {
          ref.current.innerHTML = '<app-root></app-root>';
        }

        const module = await import('angularApp/App');
        const mount = module.default;
        if (ref.current) {
          angularInstance = mount(ref.current);
        }
      } catch (error) {
        console.error('Failed to mount Angular app:', error);
      }
    };

    mountAngular();

    // Cleanup function
    return () => {
      try {
        if (angularInstance && typeof angularInstance.unmount === 'function') {
          angularInstance.unmount();
        }
        if (angularInstance && typeof angularInstance.destroy === 'function') {
          angularInstance.destroy();
        }

        // Remove all Angular-specific elements and cleanup
        const cleanup = () => {
          // Remove Angular root element
          if (ref.current) {
            ref.current.innerHTML = '';
          }

          // Remove any lingering Angular elements
          const angularElements = document.querySelectorAll('[ng-version]');
          angularElements.forEach(element => {
            if (element.parentNode) {
              element.parentNode.removeChild(element);
            }
          });

          // Clean up any Angular-specific global attributes
          document.querySelectorAll('*').forEach(element => {
            Array.from(element.attributes).forEach(attr => {
              if (attr.name.startsWith('_ng') || attr.name.startsWith('ng-')) {
                element.removeAttribute(attr.name);
              }
            });
          });
        };

        cleanup();
        
        // Run cleanup again after a short delay to catch any lingering elements
        setTimeout(cleanup, 0);
      } catch (error) {
        console.error('Error during Angular cleanup:', error);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ 
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        margin: 0,
        padding: 0
      }} 
    />
  );
};

export default AngularApp;