import React, { memo, useEffect, useRef, useState } from 'react';
import { ChangableImage, Section } from './styles';

interface Props {
  scrollPercent: number;
}

const Section1 = ({ scrollPercent }: Props) => {
  const [imageNumber, setImageNumber] = useState(1);
  const sub1Ref = useRef<HTMLDivElement>(null);
  const sub1 = sub1Ref.current;
  const sub2Ref = useRef<HTMLDivElement>(null);
  const sub2 = sub2Ref.current;
  const sub3Ref = useRef<HTMLDivElement>(null);
  const sub3 = sub3Ref.current;

  if (sub1 && sub2 && sub3) {
    if (scrollPercent < 0.45) {
      sub1.style.visibility = 'visible';
      sub2.style.visibility = 'visible';
      sub3.style.visibility = 'visible';
    } else {
      sub1.style.visibility = 'hidden';
      sub2.style.visibility = 'hidden';
      sub3.style.visibility = 'hidden';
    }

    if (scrollPercent <= 0.1) {
      sub1.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > 0.1 && scrollPercent <= 0.15) {
      sub1.style.transform = `perspective(300px) translateZ(${
        300 - (scrollPercent - 0.1) * 2000
      }px)`;
      sub1.style.transition = 'all .2s ease-in';
    } else {
      sub1.style.transform = 'perspective(300px) translateZ(0px)';
    }

    if (scrollPercent <= 0.15) {
      sub2.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > 0.15 && scrollPercent <= 0.2) {
      sub2.style.transform = `perspective(300px) translateZ(${
        300 - (scrollPercent - 0.15) * 2000
      }px)`;
      sub2.style.transition = 'all .2s ease-in';
    } else {
      sub2.style.transform = 'perspective(300px) translateZ(0px)';
    }

    if (scrollPercent <= 0.2) {
      sub3.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > 0.2 && scrollPercent <= 0.25) {
      sub3.style.transform = `perspective(300px) translateZ(${
        300 - (scrollPercent - 0.2) * 2000
      }px)`;
      sub3.style.transition = 'all .2s ease-in';
    } else {
      sub3.style.transform = 'perspective(300px) translateZ(0px)';
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (imageNumber >= 4) {
        setImageNumber(1);
      } else {
        setImageNumber((prev) => prev + 1);
      }
    }, 4000);
  }, [imageNumber]);

  return (
    <Section>
      <div className="stikcy-container">
        <div className="title-container">
          <div className="main-title">
            <div className="main-text">LE5</div>
          </div>
          <div className="sub-title">
            <div className="sub " ref={sub1Ref}>
              업
            </div>
            <div className="sub " ref={sub2Ref}>
              사이클링&nbsp;
            </div>
            <div className="sub " ref={sub3Ref}>
              프로젝트
            </div>
          </div>
        </div>
        <div className="image-container">
          <ChangableImage image={`/public/background${imageNumber}.jpg`} />
        </div>
      </div>
    </Section>
  );
};

export default memo(Section1);
