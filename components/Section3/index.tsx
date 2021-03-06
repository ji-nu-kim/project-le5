import React, { useRef } from 'react';
import { Section } from './styles';
import scrollValue from '@utils/scrollValue';

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
      title1.style.opacity = `${scrollValue(0, title1Start, scrollPercent2, 50)}`;
    } else if (scrollPercent2 > title1End) {
      title1.style.opacity = '1';
    }
    const sticky1Start = 0.68;
    const sticky1End = 0.73;
    if (scrollPercent2 <= sticky1Start) {
      sticky1.style.opacity = '0.5';
      sticky1.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky1Start && scrollPercent2 <= sticky1End) {
      sticky1.style.opacity = `${scrollValue(0.5, sticky1Start, scrollPercent2, 10)}`;
      sticky1.style.transform = `scale(${scrollValue(
        0.8,
        sticky1Start,
        scrollPercent2,
        4,
      )})`;
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
      title2.style.opacity = `${scrollValue(0, title2Start, scrollPercent2, 50)}`;
    } else if (scrollPercent2 > title2End) {
      title2.style.opacity = '1';
    }
    const sticky2Start = 0.81;
    const sticky2End = 0.86;
    if (scrollPercent2 <= sticky2Start) {
      sticky2.style.opacity = '0.5';
      sticky2.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky2Start && scrollPercent2 <= sticky2End) {
      sticky2.style.opacity = `${scrollValue(0.5, sticky2Start, scrollPercent2, 10)}`;
      sticky2.style.transform = `scale(${scrollValue(
        0.8,
        sticky2Start,
        scrollPercent2,
        4,
      )})`;
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
      title3.style.opacity = `${scrollValue(0, title3Start, scrollPercent2, 50)}`;
    } else if (scrollPercent2 > title3End) {
      title3.style.opacity = '1';
    }
    const sticky3Start = 0.94;
    const sticky3End = 0.99;
    if (scrollPercent2 <= sticky3Start) {
      sticky3.style.opacity = '0.5';
      sticky3.style.transform = 'scale(0.8)';
    } else if (scrollPercent2 > sticky3Start && scrollPercent2 <= sticky3End) {
      sticky3.style.opacity = `${scrollValue(0.5, sticky3Start, scrollPercent2, 10)}`;
      sticky3.style.transform = `scale(${scrollValue(
        0.8,
        sticky3Start,
        scrollPercent2,
        4,
      )})`;
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
          ????????? ??????
          <br /> ?????? ?????????.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem1" ref={sticky1Ref}></div>
        </div>
        <div className="sticky-description" ref={description1Ref}>
          ????????? ?????? ???????????? ????????? ???????????? ?????????????????? ??????????????????. ????????? ????????????
          ???????????? ???????????? ???????????? ??????????????? ?????????????????? ??????????????????
        </div>
      </div>

      <div className="sticky-outer">
        <div className="sticky-title title2" ref={title2Ref}>
          ????????? ???????????? ??????.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem2" ref={sticky2Ref}></div>
        </div>
        <div className="sticky-description" ref={description2Ref}>
          ????????????, ??????, ????????? ?????? ?????? ?????? ??? ?????? ???????????? ??? ???????????????.
        </div>
      </div>

      <div className="sticky-outer">
        <div className="sticky-title title3" ref={title3Ref}>
          ???????????? ????????????.
        </div>
        <div className="sticky-inner">
          <div className="sticky-elem elem3" ref={sticky3Ref}></div>
        </div>
        <div className="sticky-description" ref={description3Ref}>
          ????????? ???????????? ?????? ??????????????? ????????? ????????? ???????????? ?????????????????? ?????? ?????????
          ?????? ????????? ???????????????.
        </div>
      </div>

      <div className="footer-text">2015.05.03 ???????????? LE5</div>
    </Section>
  );
};

export default Section3;
