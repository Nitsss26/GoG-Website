import React, { useEffect } from 'react';

const AboutNexaContainer: React.FC = () => {
  useEffect(() => {
    document.body.style.zoom = '1';
    return () => {
      document.body.style.zoom = ''; // let CSS take over again
    };
  }, []);

  const iframeSrc = import.meta.env.DEV ? "http://localhost:5173/#/aboutnexa" : "/tech/index.html#/aboutnexa";

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#020703' }}>
      <iframe 
        src={iframeSrc} 
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
        title="About QuantNexa" 
      />
    </div>
  );
};

export default AboutNexaContainer;
