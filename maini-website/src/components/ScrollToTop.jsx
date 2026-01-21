import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" coordinates mean top-left of the screen
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}