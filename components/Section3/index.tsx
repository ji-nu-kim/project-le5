import React, { useEffect, useRef, useState } from 'react';
import { Section } from './styles';

interface Props {
  scrollPercent: number;
  scrollPercent2: number;
  currentY: number;
}

const Section3 = ({ scrollPercent, scrollPercent2, currentY }: Props) => {
  const sticky1Ref = useRef<HTMLDivElement>(null);
  const sticky1 = sticky1Ref.current;
  const sticky2Ref = useRef<HTMLDivElement>(null);
  const sticky2 = sticky2Ref.current;

  if (sticky2) {
    let start = 0.69;
    let end = 0.74;

    if (scrollPercent <= start) {
      sticky2.style.position = 'relative';
      sticky2.style.top = '0px';
    } else if (scrollPercent > start && scrollPercent <= end) {
      sticky2.style.top = '100px';
      sticky2.style.position = 'sticky';
      sticky2.style.opacity = '1';
    } else {
      sticky2.style.top = `${100 - (scrollPercent2 - end) * 1000}px`;
      sticky2.style.opacity = `${1 - (scrollPercent2 - end) * 20}`;
    }
  }

  return (
    <Section>
      {/* <div className="relative-container" ref={sticky2Ref}>
        <h1>스티키2에요</h1>
        <p>이동시켜보세요</p>
      </div>
      <div className="sticky-container" ref={sticky1Ref}>
        <h1>스티키에요</h1>
        <p>이동시켜보세요</p>
      </div> */}
    </Section>
  );
};

export default Section3;
