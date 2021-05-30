import Section1 from '@components/Section1';
import Section2 from '@components/Section2';
import Section3 from '@components/Section3';
import React, { useCallback, useEffect, useState } from 'react';

import scrollCalculate from '@utils/scrollCalculate';

const Main = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [scroll, setScroll] = useState<number[]>([]);
  const [currentY, scrollPercent, scrollPercent2] = scroll;
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
    <>
      <Section1 scrollPercent={scrollPercent} />
      <Section2 scrollPercent={scrollPercent} />
      <Section3 scrollPercent2={scrollPercent2} />
    </>
  );
};

export default Main;
