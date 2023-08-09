import React, { useEffect, useState } from 'react';
import styles from './buttonScroll.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
        className='buttonScroll'
          onClick={scrollToTop}
          style={styles.buttonScroll}
          title="Go to top"
        >
          &#9650;
        </button>
      )}
    </div>
  );
};


export default ScrollToTopButton;
