/* eslint-disable @next/next/no-img-element */
'use client';

import { memo, useEffect, useState } from 'react';
import './styles.css';

/**
 *
 * @todo:
 * - The button should always be at the right bottom of the page
 * - The button should be hidden and should only appear when we scroll for a certain height eg: ~200px
 * - On clicking it, we should be smoothly taken to the top of the page
 *
 *
 */
function ScrollToTopButton() {
  const [showBtn, setShowBtn] = useState(false);
  const el: any = document.querySelector('body')

  useEffect(() => {
    el?.addEventListener('scroll', (e: any) => {
    
      (e?.target?.scrollTop > 250)  ? setShowBtn(true): setShowBtn(false);
      
    });
  }, []);

  const scrollToTop = () => {
    el!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showBtn && (
        <button className="btn right-bottom-btn" onClick={scrollToTop}>
          Go to Top
        </button>
      )}
    </div>
  );
}

export default memo(ScrollToTopButton);
