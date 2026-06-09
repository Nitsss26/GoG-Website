import React, { useEffect } from 'react';

const NewTech: React.FC = () => {
  useEffect(() => {
    document.body.style.zoom = '1';
    return () => {
      document.body.style.zoom = ''; // let CSS take over again
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#020703' }}>
      <iframe 
        src="/tech/index.html" 
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
        title="GoG Tech" 
      />
    </div>
  );
};

export default NewTech;
