import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // This hook gives us the current URL pathway (like '/hydro' or '/solar')
  const { pathname } = useLocation();

  // Every time the pathname changes, this effect runs and scrolls to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // This component doesn't render any visible UI, so we return null
  return null; 
};

export default ScrollToTop;