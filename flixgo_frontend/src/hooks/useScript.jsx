import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScript = source => {
  const location = useLocation();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = source;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [location]);
};

export default useScript;