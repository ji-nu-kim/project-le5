import scrollValue from '@utils/scrollValue';
import React, { memo, useEffect, useRef, useState } from 'react';
import { ChangableImage, Section } from './styles';

interface Props {
  scrollPercent: number;
}

const Section1 = ({ scrollPercent }: Props) => {
  const [imageNumber, setImageNumber] = useState(1);

  const main1Ref = useRef<HTMLDivElement>(null);
  const main1 = main1Ref.current;
  const main2Ref = useRef<HTMLDivElement>(null);
  const main2 = main2Ref.current;
  const sub1Ref = useRef<HTMLDivElement>(null);
  const sub1 = sub1Ref.current;
  const sub2Ref = useRef<HTMLDivElement>(null);
  const sub2 = sub2Ref.current;
  const sub3Ref = useRef<HTMLDivElement>(null);
  const sub3 = sub3Ref.current;
  const sub4Ref = useRef<HTMLDivElement>(null);
  const sub4 = sub4Ref.current;

  if (main1 && main2 && sub1 && sub2 && sub3 && sub4) {
    if (scrollPercent < 0.45) {
      sub1.style.visibility = 'visible';
      sub2.style.visibility = 'visible';
      sub3.style.visibility = 'visible';
      sub4.style.visibility = 'visible';
    } else {
      sub1.style.visibility = 'hidden';
      sub2.style.visibility = 'hidden';
      sub3.style.visibility = 'hidden';
      sub4.style.visibility = 'hidden';
    }

    if (scrollPercent < 0.1) {
      main1.style.opacity = '0';
    } else {
      main1.style.opacity = '1';
    }

    if (scrollPercent < 0.13) {
      main2.style.opacity = '0';
    } else {
      main2.style.opacity = '1';
    }
    const sub1Start = 0.15;
    const sub1End = 0.2;
    if (scrollPercent <= sub1Start) {
      sub1.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > sub1Start && scrollPercent <= sub1End) {
      sub1.style.transform = `perspective(300px) translateZ(${scrollValue(
        300,
        sub1Start,
        scrollPercent,
        2000,
        true,
      )}px)`;
    } else if (scrollPercent > sub1End) {
      sub1.style.transform = 'perspective(300px) translateZ(0px)';
    }

    const sub2Start = 0.18;
    const sub2End = 0.23;
    if (scrollPercent <= sub2Start) {
      sub2.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > sub2Start && scrollPercent <= sub2End) {
      sub2.style.transform = `perspective(300px) translateZ(${scrollValue(
        300,
        sub2Start,
        scrollPercent,
        2000,
        true,
      )}px)`;
    } else if (scrollPercent > sub2End) {
      sub2.style.transform = 'perspective(300px) translateZ(0px)';
    }

    const sub3Start = 0.22;
    const sub3End = 0.27;
    if (scrollPercent <= sub3Start) {
      sub3.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > sub3Start && scrollPercent <= sub3End) {
      sub3.style.transform = `perspective(300px) translateZ(${scrollValue(
        300,
        sub3Start,
        scrollPercent,
        2000,
        true,
      )}px)`;
    } else if (scrollPercent > sub3End) {
      sub3.style.transform = 'perspective(300px) translateZ(0px)';
    }

    const sub4Start = 0.26;
    const sub4End = 0.31;
    if (scrollPercent <= sub4Start) {
      sub4.style.transform = 'perspective(300px) translateZ(300px)';
    } else if (scrollPercent > sub4Start && scrollPercent <= sub4End) {
      sub4.style.transform = `perspective(300px) translateZ(${scrollValue(
        300,
        sub4Start,
        scrollPercent,
        2000,
        true,
      )}px)`;
    } else if (scrollPercent > sub4End) {
      sub4.style.transform = 'perspective(300px) translateZ(0px)';
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
        <div className="logo">
          PROJECT <span>LE5</span>
        </div>
        <div className="title-container">
          <div className="main-title">
            길가에 버려진 <span className="main-text-point1" ref={main1Ref}></span>
            <br />
            새로운 <span className="main-text-point2" ref={main2Ref}></span>이 될 수
            있을까?
          </div>
          <div className="sub-title">
            <span className="sub-text-point" ref={sub1Ref}>
              업사이클링을
            </span>
            &nbsp;
            <span className="sub-text-point" ref={sub2Ref}>
              통한
            </span>
            &nbsp;
            <span className="sub-text-point" ref={sub3Ref}>
              물건의
            </span>
            &nbsp;
            <span className="sub-text-point" ref={sub4Ref}>
              재탄생
            </span>
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
