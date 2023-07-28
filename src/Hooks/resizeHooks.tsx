import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // You can adjust the width threshold based on your desired breakpoint
      const isMobileView = screenWidth < 768; // Example breakpoint: 768px

      setIsMobile(isMobileView);
    };

    // Initial check on mount
    handleResize();

    // Add event listener to update when the window is resized
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
