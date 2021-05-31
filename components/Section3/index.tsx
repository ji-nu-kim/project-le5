import React, { useRef } from 'react';
import { Section } from './styles';

interface Props {
  scrollPercent2: number;
}

const Section3 = ({ scrollPercent2 }: Props) => {
  const title1Ref = useRef<HTMLDivElement>(null);
  const title1 = title1Ref.current;
  const title2Ref = useRef<HTMLDivElement>(null);
  const title2 = title2Ref.current;
  const title3Ref = useRef<HTMLDivElement>(null);
  const title3 = title3Ref.current;

  const sticky1Ref = useRef<HTMLDivElement>(null);
  const sticky1 = sticky1Ref.current;
  const sticky2Ref = useRef<HTMLDivElement>(null);
  const sticky2 = sticky2Ref.current;
  const sticky3Ref = useRef<HTMLDivElement>(null);
  const sticky3 = sticky3Ref.current;

  const description1Ref = useRef<HTMLDivElement>(null);
  const description1 = description1Ref.current;
  const description2Ref = useRef<HTMLDivElement>(null);
  const description2 = description2Ref.current;
  const description3Ref = useRef<HTMLDivElement>(null);
  const description3 = description3Ref.current;

  if (
    title1 &&
    title2 &&
    title3 &&
    description1 &&
    description2 &&
    description3 &&
    sticky1 &&
    sticky2 &&
    sticky3
  ) {
    const title1Start = 0.65;
    const title1End = 0.67;
    if (scrollPercent2 <= title1Start) {
      title1.style.opacity = '0';
    } else if (scrollPercent2 > title1Start && scrollPercent2 <= title1End) {
      title1.style.opacity = `${0 + (scrollPercent2 - title1Start) * 50}`;
    } else if (scrollPercent2 > title1End) {
      title1.style.opacity = '1';
    }
    const sticky1Start = 0.68;
    const sticky1End = 0.73;
    if (scrollPercent2 <= sticky1Start) {
      sticky1.style.opacity = '0.5';
      sticky1.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky1Start && scrollPercent2 <= sticky1End) {
      sticky1.style.opacity = `${0.5 + (scrollPercent2 - sticky1Start) * 10}`;
      sticky1.style.transform = `scale(${0.8 + (scrollPercent2 - sticky1Start) * 4})`;
    } else if (scrollPercent2 > sticky1End) {
      sticky1.style.opacity = '1';
      sticky1.style.transform = 'scale(1)';
    }
    const desc1trigger = 0.73;
    if (scrollPercent2 < desc1trigger) {
      description1.style.opacity = '0';
    } else if (scrollPercent2 >= desc1trigger) {
      description1.style.opacity = '1';
    }
    const title2Start = 0.78;
    const title2End = 0.8;
    if (scrollPercent2 <= title2Start) {
      title2.style.opacity = '0';
    } else if (scrollPercent2 > title2Start && scrollPercent2 <= title2End) {
      title2.style.opacity = `${0 + (scrollPercent2 - title2Start) * 50}`;
    } else if (scrollPercent2 > title2End) {
      title2.style.opacity = '1';
    }
    const sticky2Start = 0.81;
    const sticky2End = 0.86;
    if (scrollPercent2 <= sticky2Start) {
      sticky2.style.opacity = '0.5';
      sticky2.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky2Start && scrollPercent2 <= sticky2End) {
      sticky2.style.opacity = `${0.5 + (scrollPercent2 - sticky2Start) * 10}`;
      sticky2.style.transform = `scale(${0.8 + (scrollPercent2 - sticky2Start) * 4})`;
    } else if (scrollPercent2 > sticky2End) {
      sticky2.style.opacity = '1';
      sticky2.style.transform = 'scale(1)';
    }
    const desc2trigger = 0.86;
    if (scrollPercent2 < desc2trigger) {
      description2.style.opacity = '0';
    } else if (scrollPercent2 >= desc2trigger) {
      description2.style.opacity = '1';
    }
    const title3Start = 0.915;
    const title3End = 0.935;
    if (scrollPercent2 <= title3Start) {
      title3.style.opacity = '0';
    } else if (scrollPercent2 > title3Start && scrollPercent2 <= title3End) {
      title3.style.opacity = `${0 + (scrollPercent2 - title3Start) * 50}`;
    } else if (scrollPercent2 > title3End) {
      title3.style.opacity = '1';
    }
    const sticky3Start = 0.94;
    const sticky3End = 0.99;
    if (scrollPercent2 <= sticky3Start) {
      sticky3.style.opacity = '0.5';
      sticky3.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky3Start && scrollPercent2 <= sticky3End) {
      sticky3.style.opacity = `${0.5 + (scrollPercent2 - sticky3Start) * 10}`;
      sticky3.style.transform = `scale(${0.8 + (scrollPercent2 - sticky3Start) * 4})`;
    } else if (scrollPercent2 > sticky3End) {
      sticky3.style.opacity = '1';
      sticky3.style.transform = 'scale(1)';
    }
    const desc3trigger = 0.99;
    if (scrollPercent2 < desc3trigger) {
      description3.style.opacity = '0';
    } else if (scrollPercent2 >= desc3trigger) {
      description3.style.opacity = '1';
    }
  }

  return (
    <Section>
      <div className="sticky-outer">
        <div className="sticky-title title1" ref={title1Ref}>
          버려진 캔에
          <br /> 색을 입히다.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem1" ref={sticky1Ref}></div>
        </div>
        <div className="sticky-description" ref={description1Ref}>
          버려진 캔에 빈티지한 느낌을 주기위해 무광페인트로 도색했습니다. 로고는 스텐실을
          사용했고 포인트를 주기위해 실버컬러의 아크릴물감을 사용했습니다
        </div>
      </div>

      <div className="sticky-outer">
        <div className="sticky-title title2" ref={title2Ref}>
          다양한 식물과의 조화.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem2" ref={sticky2Ref}></div>
        </div>
        <div className="sticky-description" ref={description2Ref}>
          다육식물, 허브, 화려한 색을 가진 식물 등 어떤 식물과도 잘 어울립니다.
        </div>
      </div>

      <div className="sticky-outer">
        <div className="sticky-title title3" ref={title3Ref}>
          불쾌감이 사라지다.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem3" ref={sticky3Ref}></div>
        </div>
        <div className="sticky-description" ref={description3Ref}>
          버려진 쓰레기를 보면 지저분하고 불쾌한 느낌이 들었지만 업사이클링을 통해 하나의
          멋진 화분이 되었습니다.
        </div>
      </div>

      <div className="footer-text">2015.05.03 프로젝트 LE5</div>
    </Section>
  );
};

export default Section3;
