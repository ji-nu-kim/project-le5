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
    if (scrollPercent < 0.1) {
      sub1.style.opacity = '0';
    } else {
      sub1.style.opacity = '1';
      sub1.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.18) {
      sub2.style.opacity = '0';
    } else {
      sub2.style.opacity = '1';
      sub2.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.26) {
      sub3.style.opacity = '0';
    } else {
      sub3.style.opacity = '1';
      sub3.style.transition = 'all .5s linear';
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
        <div className="main-title">LE5</div>
        <div className="image-container">
          <ChangableImage image={`/public/background${imageNumber}.jpg`} />
          <div className="sub-title">
            <div className="sub1" ref={sub1Ref}>
              쓸모를 다해 버려진 쓰레기
            </div>
            <div className="sub2" ref={sub2Ref}>
              누군가에게는 도움이
            </div>
            <div className="sub3" ref={sub3Ref}>
              누군가에게는 위험이
            </div>
          </div>
        </div>
        <div className="footer-title">2015.05.03</div>
      </div>
    </Section>
  );
};

export default memo(Section1);
