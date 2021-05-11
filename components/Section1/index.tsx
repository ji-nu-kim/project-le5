import React, { createElement, memo, useEffect, useRef } from 'react';
import { Section } from './styles';

interface Props {
  scrollPercent: number;
}

const Section1 = ({ scrollPercent }: Props) => {
  const textHelloRef = useRef<HTMLHeadingElement>(null);
  const textHello = textHelloRef.current;
  const textNameRef = useRef<HTMLHeadingElement>(null);
  const textName = textNameRef.current;
  const textP1Ref = useRef<HTMLParagraphElement>(null);
  const textP1 = textP1Ref.current;
  const textP2Ref = useRef<HTMLParagraphElement>(null);
  const textP2 = textP2Ref.current;

  // if (textHello && textName) {
  //   if (scrollPercent < 0.1) {
  //     textHello.style.opacity = '1';
  //     textName.style.visibility = 'visible';
  //   } else if (scrollPercent >= 0.1 && scrollPercent < 0.15) {
  //     textHello.style.opacity = `${1 - (1 / 5) * (scrollPercent + 0.01 - 0.1) * 100}`;
  //     textHello.style.transition = 'all 0.2s linear';
  //   } else {
  //     textHello.style.opacity = '0';
  //     textName.style.visibility = 'hidden';
  //   }
  //   console.log(scrollPercent);
  //   if (scrollPercent < 0.15) {
  //     textName.style.opacity = '0';
  //     textName.style.visibility = 'visible';
  //     textName.style.transform = 'translateY(-50px)';
  //   } else if (scrollPercent >= 0.15 && scrollPercent < 0.2) {
  //     textName.style.visibility = 'visible';
  //     textName.style.opacity = `${0 + (1 / 5) * (scrollPercent + 0.01 - 0.15) * 100}`;
  //     textName.style.transition = 'all 0.2s linear';
  //     textName.style.transform = `translateY(${
  //       -50 + (50 / 5) * (scrollPercent + 0.01 - 0.15) * 100
  //     }px)`;
  //   } else if (scrollPercent >= 0.2 && scrollPercent < 0.25) {
  //     textName.style.visibility = 'visible';
  //     textName.style.opacity = `${1 - (1 / 5) * (scrollPercent + 0.01 - 0.2) * 100}`;
  //     textName.style.transition = 'all 0.2s linear';
  //     textName.style.transform = `translateY(${
  //       0 + (50 / 5) * (scrollPercent + 0.01 - 0.15) * 100
  //     }px)`;
  //   } else {
  //     textName.style.opacity = '0';
  //     textName.style.transform = 'translateY(50px)';
  //     textName.style.visibility = 'hidden';
  //   }
  // }

  return (
    <Section>
      <div className="stikcy-container">
        <div className="cover-image"></div>

        <div className="text-container">
          <h1 className="text-hello" ref={textHelloRef}>
            LE5
          </h1>
          <h2 className="text-name" ref={textNameRef}>
            ...
          </h2>
          <p ref={textP1Ref}>The LE5 started with garbage dumped on the street.</p>
          <p ref={textP2Ref}>
            It's an experiment on the restartability of discarded objects.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default memo(Section1);
