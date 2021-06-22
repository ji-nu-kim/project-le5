import Section1 from '@components/Section1';
import Section2 from '@components/Section2';
import Section3 from '@components/Section3';
import React, { useCallback, useEffect, useState } from 'react';

import scrollCalculate from '@utils/scrollCalculate';

const Main = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [scroll, setScroll] = useState<number>(0);

  const scrollHandler = useCallback(() => {
    setScroll(scrollCalculate(window.scrollY, height));
  }, [height]);

  const resizeHandler = useCallback(() => {
    setHeight(window.innerHeight);
  }, []);

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
      <Section1 scrollPercent={scroll} />
      <Section2 scrollPercent={scroll} />
      <Section3 scrollPercent2={scroll} />
    </>
  );
};

export default Main;
