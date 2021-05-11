import Main from '@components/Main';

import React, { memo, useCallback, useEffect, useState } from 'react';

import scrollCalculate from '@utils/scrollCalculate';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [scroll, setScroll] = useState<number[]>([]);
  const [currentY, scrollPercent] = scroll;
  const scrollHandler = useCallback(() => {
    setScroll(scrollCalculate(window.scrollY, height));
  }, [height, scroll]);

  const resizeHandler = useCallback(() => {
    setHeight(window.innerHeight);
  }, [height]);

  useEffect(() => {
    window.addEventListener('load', resizeHandler);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('load', resizeHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [scrollHandler, resizeHandler]);

  return (
    <div>
      <Main currentY={currentY} scrollPercent={scrollPercent} />
    </div>
  );
}

export default memo(App);
