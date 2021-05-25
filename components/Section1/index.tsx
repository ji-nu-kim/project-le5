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
  const sub4Ref = useRef<HTMLDivElement>(null);
  const sub4 = sub4Ref.current;
  const sub5Ref = useRef<HTMLDivElement>(null);
  const sub5 = sub5Ref.current;
  const sub6Ref = useRef<HTMLDivElement>(null);
  const sub6 = sub6Ref.current;

  if (sub1 && sub2 && sub3 && sub4 && sub5 && sub6) {
    if (scrollPercent < 0.45) {
      sub1.style.visibility = 'visible';
      sub2.style.visibility = 'visible';
      sub3.style.visibility = 'visible';
      sub4.style.visibility = 'visible';
      sub5.style.visibility = 'visible';
      sub6.style.visibility = 'visible';
    } else {
      sub1.style.visibility = 'hidden';
      sub2.style.visibility = 'hidden';
      sub3.style.visibility = 'hidden';
      sub4.style.visibility = 'hidden';
      sub5.style.visibility = 'hidden';
      sub6.style.visibility = 'hidden';
    }

    if (scrollPercent < 0.1) {
      sub1.style.opacity = '0';
    } else {
      sub1.style.opacity = '1';
      sub1.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.14) {
      sub2.style.opacity = '0';
    } else {
      sub2.style.opacity = '1';
      sub2.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.18) {
      sub3.style.opacity = '0';
    } else {
      sub3.style.opacity = '1';
      sub3.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.22) {
      sub4.style.opacity = '0';
    } else {
      sub4.style.opacity = '1';
      sub4.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.26) {
      sub5.style.opacity = '0';
    } else {
      sub5.style.opacity = '1';
      sub5.style.transition = 'all .5s linear';
    }

    if (scrollPercent < 0.3) {
      sub6.style.opacity = '0';
    } else {
      sub6.style.opacity = '1';
      sub6.style.transition = 'all .5s linear';
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
        <div className="main-title">
          <div className="main-text">LE5</div>
          <div className="sub-text">업사이클링 프로젝트</div>
        </div>
        <div className="image-container">
          <ChangableImage image={`/public/background${imageNumber}.jpg`} />
        </div>
        <div className="sub-title sub1" ref={sub1Ref}>
          쓸모를 다해 버려진 물건
          <br />
          다시 사용할 수 없을까?
        </div>
        <div className="sub-title sub2" ref={sub2Ref}>
          몇년째 자리를 지키고 있는 버려진 변기에 꽃을 심으면 예쁠 것 같단 생각이 들었다
        </div>
        <div className="sub-title sub3" ref={sub3Ref}>
          일회용컵 낭비를 막기위해 텀블러 사용이 권장되고 있다. 그런데 여기저기서 텀블러를
          마구 만들어내고 있다. 일회용컵 아끼려다 텀블러 낭비가 시작되어버린 것 같다
        </div>
        <div className="sub-title sub4" ref={sub4Ref}>
          우주에도 쓰레기가 많다던데
        </div>
        <div className="sub-title sub5" ref={sub5Ref}>
          과자 이중삼중포장하지말고 양이나 많이 넣어라
        </div>
        <div className="sub-title sub6" ref={sub6Ref}>
          오늘도 쓰레기를 버린다
        </div>
      </div>
    </Section>
  );
};

export default memo(Section1);
