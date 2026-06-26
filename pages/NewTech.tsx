import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewTech: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.body.style.zoom = '1';
    return () => {
      document.body.style.zoom = ''; // let CSS take over again
    };
  }, []);

  const isDev = import.meta.env.DEV;
  // Use ref so the iframe doesn't reload when component re-renders
  const initialSrc = useRef(
    isDev 
      ? `http://localhost:5173/#${location.pathname === '/aboutnexa' ? '/aboutnexa' : '/'}`
      : `/tech/index.html#${location.pathname === '/aboutnexa' ? '/aboutnexa' : '/'}`
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'CHANGE_URL') {
        navigate(event.data.path, { replace: true });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  // Sync parent router changes down to iframe (e.g. back button)
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const targetPath = location.pathname === '/aboutnexa' ? '/aboutnexa' : '/';
      iframeRef.current.contentWindow.postMessage({ type: 'SYNC_ROUTE', path: targetPath }, '*');
    }
  }, [location.pathname]);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#020703' }}>
      <iframe 
        ref={iframeRef}
        src={initialSrc.current} 
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
        title="GoG Tech" 
      />
    </div>
  );
};

export default NewTech;
