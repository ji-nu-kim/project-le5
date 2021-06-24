import centerOfScreen from '@utils/centerOfScreen';
import React, { useRef } from 'react';
import { Section } from './styles';

interface Props {
  scrollPercent: number;
}

function Section2({ scrollPercent }: Props) {
  const part1PathRef = useRef<SVGPathElement>(null);
  const part1Path = part1PathRef.current;
  const part1TextRef = useRef<HTMLParagraphElement>(null);
  const part1Text = part1TextRef.current;
  const part2PathRef = useRef<SVGPathElement>(null);
  const part2Path = part2PathRef.current;
  const part2TextRef = useRef<HTMLParagraphElement>(null);
  const part2Text = part2TextRef.current;
  const part3PathRef = useRef<SVGPathElement>(null);
  const part3Path = part3PathRef.current;
  const part3TextRef = useRef<HTMLParagraphElement>(null);
  const part3Text = part3TextRef.current;
  const part4PathRef = useRef<SVGPathElement>(null);
  const part4Path = part4PathRef.current;
  const part4TextRef = useRef<HTMLParagraphElement>(null);
  const part4Text = part4TextRef.current;

  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg1 = svg1Ref.current;
  const svg2Ref = useRef<SVGSVGElement>(null);
  const svg2 = svg2Ref.current;
  const svg3Ref = useRef<SVGSVGElement>(null);
  const svg3 = svg3Ref.current;
  const svg4Ref = useRef<SVGSVGElement>(null);
  const svg4 = svg4Ref.current;

  if (
    svg1 &&
    svg2 &&
    svg3 &&
    svg4 &&
    part1Path &&
    part2Path &&
    part3Path &&
    part4Path &&
    part1Text &&
    part2Text &&
    part3Text &&
    part4Text
  ) {
    if (scrollPercent > 0.32 && scrollPercent < 0.75) {
      svg1.style.visibility = 'visible';
      svg2.style.visibility = 'visible';
      svg3.style.visibility = 'visible';
      svg4.style.visibility = 'visible';
      part1Path.style.visibility = 'visible';
      part2Path.style.visibility = 'visible';
      part3Path.style.visibility = 'visible';
      part4Path.style.visibility = 'visible';
      part1Text.style.visibility = 'visible';
      part2Text.style.visibility = 'visible';
      part3Text.style.visibility = 'visible';
      part4Text.style.visibility = 'visible';
    } else {
      svg1.style.visibility = 'hidden';
      svg2.style.visibility = 'hidden';
      svg3.style.visibility = 'hidden';
      svg4.style.visibility = 'hidden';
      part1Path.style.visibility = 'hidden';
      part2Path.style.visibility = 'hidden';
      part3Path.style.visibility = 'hidden';
      part4Path.style.visibility = 'hidden';
      part1Text.style.visibility = 'hidden';
      part2Text.style.visibility = 'hidden';
      part3Text.style.visibility = 'hidden';
      part4Text.style.visibility = 'hidden';
    }

    const part1Trigger = centerOfScreen(svg1, window.innerHeight / 2);
    const part2Trigger = centerOfScreen(svg2, window.innerHeight / 2);
    const part3Trigger = centerOfScreen(svg3, window.innerHeight / 2);
    const part4Trigger = centerOfScreen(svg4, window.innerHeight / 2);
    if (part1Trigger) {
      part1Path.style.strokeWidth = '200';
      part1Text.style.opacity = '1';
      part1Text.style.visibility = 'visible';
      part1Text.style.transform = 'translateY(0px)';
    } else {
      part1Path.style.strokeWidth = '1';
      part1Text.style.opacity = '0';
      part1Text.style.visibility = 'hidden';
      part1Text.style.transform = 'translateY(50px)';
    }

    if (part2Trigger) {
      part2Path.style.strokeWidth = '200';
      part2Text.style.opacity = '1';
      part2Text.style.visibility = 'visible';
      part2Text.style.transform = 'translateY(0px)';
    } else {
      part2Path.style.strokeWidth = '1';
      part2Text.style.opacity = '0';
      part2Text.style.visibility = 'hidden';
      part2Text.style.transform = 'translateY(50px)';
    }

    if (part3Trigger) {
      part3Path.style.strokeWidth = '200';
      part3Text.style.opacity = '1';
      part3Text.style.visibility = 'visible';
      part3Text.style.transform = 'translateY(0px)';
    } else {
      part3Path.style.strokeWidth = '1';
      part3Text.style.opacity = '0';
      part3Text.style.visibility = 'hidden';
      part3Text.style.transform = 'translateY(50px)';
    }

    if (part4Trigger) {
      part4Path.style.strokeWidth = '200';
      part4Text.style.opacity = '1';
      part4Text.style.visibility = 'visible';
      part4Text.style.transform = 'translateY(0px)';
    } else {
      part4Path.style.strokeWidth = '1';
      part4Text.style.opacity = '0';
      part4Text.style.visibility = 'hidden';
      part4Text.style.transform = 'translateY(50px)';
    }
  }

  return (
    <Section>
      <div className="part1 part">
        <div className="part-header">
          <div className="part1-main-title part-main-title">프로젝트 LE5</div>
          <div className="part-sub-title">버려진 물건의 가능성</div>
        </div>
        <svg ref={svg1Ref} viewBox="-25 0 213 71" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="le5-mask">
              <path
                d="M 98.291 28.223 L 98.291 40.967 L 71.338 40.967 L 71.338 57.91 L 103.174 57.91 L 103.174 71.094 L 54.199 71.094 L 54.199 0 L 103.271 0 L 103.271 13.232 L 71.338 13.232 L 71.338 28.223 L 98.291 28.223 Z M 123.193 39.404 L 110.107 36.328 L 114.453 0 L 156.006 0 L 156.006 12.793 L 127.832 12.793 L 126.221 26.904 A 13.582 13.582 0 0 1 127.694 26.17 Q 128.499 25.823 129.455 25.51 A 29.308 29.308 0 0 1 130.835 25.098 A 21.718 21.718 0 0 1 135.181 24.357 A 19.468 19.468 0 0 1 136.426 24.316 A 28.617 28.617 0 0 1 142.991 25.024 Q 148.932 26.424 152.71 30.591 A 20.65 20.65 0 0 1 157.19 38.824 Q 158.398 42.972 158.398 48.193 Q 158.398 55.029 155.347 60.571 A 20.975 20.975 0 0 1 146.777 69.092 Q 141.26 72.07 133.74 72.07 A 29.091 29.091 0 0 1 121.191 69.312 A 24.353 24.353 0 0 1 115.404 65.56 A 20.96 20.96 0 0 1 112.012 61.743 A 18.374 18.374 0 0 1 108.74 51.054 A 21.732 21.732 0 0 1 108.74 50.879 L 125.244 50.879 A 11.936 11.936 0 0 0 125.709 53.582 A 8.356 8.356 0 0 0 127.734 57.08 A 7.527 7.527 0 0 0 132.266 59.287 A 10.484 10.484 0 0 0 133.643 59.375 A 7.71 7.71 0 0 0 137.919 58.24 Q 140.97 56.267 141.708 50.865 A 28.16 28.16 0 0 0 141.943 47.07 Q 141.943 37.333 134.504 35.93 A 14.667 14.667 0 0 0 131.787 35.693 A 14.162 14.162 0 0 0 128.397 36.074 A 9.048 9.048 0 0 0 123.193 39.404 Z M 17.139 0 L 17.139 57.91 L 46.973 57.91 L 46.973 71.094 L 0 71.094 L 0 0 L 17.139 0 Z"
                ref={part1PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#le5-mask)">
            <image
              x="-90"
              y="-140"
              width="350"
              height="350"
              xlinkHref="public/svg1.jpg"
            />
          </g>
        </svg>
        <p ref={part1TextRef} className="description part1-description">
          <span>LE5</span>는 버려진 물건을 업사이클링해서 다시 사용할 수 있는 물건으로
          만드는 프로젝트입니다. LE5는 Let's go를 축약한 단어인 leggo의 le와 숫자 5를
          합성한 단어입니다. 숫자 5는 일본어로 '고'로 발음합니다. 출발과 가다라는 의미를
          지니고 있으며 버려진 물건에서 다시 새로운 물건으로 태어나 필요에 의해 사용되어질
          것 입니다.
        </p>
      </div>

      <div className="part2 part">
        <div className="part-header">
          <div className="part2-main-title part-main-title">물건의 죽음</div>
          <div className="part-sub-title">물건은 죽어서도 쓸모가 있다</div>
        </div>
        <svg ref={svg2Ref} viewBox="-20 0 213 71" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="die-mask">
              <path
                d="M 118.066 21.973 L 103.418 21.973 A 12.441 12.441 0 0 0 103.038 18.808 A 8.702 8.702 0 0 0 100.342 14.38 A 10.127 10.127 0 0 0 96.507 12.306 Q 94.989 11.849 93.17 11.721 A 20.878 20.878 0 0 0 91.699 11.67 A 20.626 20.626 0 0 0 88.576 11.892 Q 86.887 12.151 85.518 12.713 A 9.512 9.512 0 0 0 83.35 13.941 A 7.645 7.645 0 0 0 81.262 16.294 Q 80.401 17.84 80.372 19.788 A 9.151 9.151 0 0 0 80.371 19.922 A 6.263 6.263 0 0 0 82.294 24.45 A 10.042 10.042 0 0 0 83.862 25.733 A 22.808 22.808 0 0 0 86.508 27.239 Q 89.377 28.649 93.542 29.944 A 79.151 79.151 0 0 0 94.141 30.127 A 74.622 74.622 0 0 1 101.128 32.586 Q 108.381 35.583 112.354 39.454 Q 118.066 45.02 118.066 53.321 A 19.526 19.526 0 0 1 116.958 60.043 A 16.765 16.765 0 0 1 111.084 67.798 Q 105.083 72.309 95.513 72.944 A 48.82 48.82 0 0 1 92.285 73.047 A 38.937 38.937 0 0 1 83.06 71.989 A 33.391 33.391 0 0 1 77.344 70.044 A 27.397 27.397 0 0 1 71.75 66.757 A 21.308 21.308 0 0 1 67.065 61.817 A 20.633 20.633 0 0 1 63.584 51.455 A 25.6 25.6 0 0 1 63.525 49.708 L 78.223 49.708 A 13.995 13.995 0 0 0 79.047 54.717 Q 81.628 61.475 92.285 61.475 A 20.914 20.914 0 0 0 95.326 61.268 Q 96.973 61.025 98.313 60.499 A 9.537 9.537 0 0 0 100.439 59.351 A 6.764 6.764 0 0 0 103.311 54.456 A 9.055 9.055 0 0 0 103.369 53.418 A 9.359 9.359 0 0 0 102.993 50.691 A 7.041 7.041 0 0 0 100.439 47.046 A 15.484 15.484 0 0 0 98.487 45.813 Q 96.274 44.611 92.767 43.341 A 88.716 88.716 0 0 0 89.893 42.359 A 117.494 117.494 0 0 1 85.442 40.825 Q 83.182 39.992 81.292 39.167 A 46.769 46.769 0 0 1 77.832 37.5 A 30.175 30.175 0 0 1 71.978 33.461 A 17.618 17.618 0 0 1 65.723 19.874 A 17.168 17.168 0 0 1 68.97 9.595 A 19.372 19.372 0 0 1 74.449 4.52 A 25.935 25.935 0 0 1 78.296 2.54 A 32.757 32.757 0 0 1 87.137 0.274 A 41.113 41.113 0 0 1 91.943 0 A 35.959 35.959 0 0 1 99.357 0.734 A 28.635 28.635 0 0 1 105.518 2.759 Q 111.475 5.518 114.771 10.547 A 20.252 20.252 0 0 1 118.059 21.376 A 24.463 24.463 0 0 1 118.066 21.973 Z M 170.752 29.786 L 170.752 41.26 L 142.627 41.26 L 142.627 60.303 L 175.635 60.303 L 175.635 72.071 L 127.979 72.071 L 127.979 0.977 L 175.537 0.977 L 175.537 12.842 L 142.627 12.842 L 142.627 29.786 L 170.752 29.786 Z M 39.795 0.977 L 54.492 0.977 L 54.492 47.803 Q 54.492 59.473 47.192 66.26 A 24.377 24.377 0 0 1 36.331 72.007 Q 32.198 73.047 27.246 73.047 Q 16.168 73.047 9.148 67.829 A 23.169 23.169 0 0 1 7.471 66.456 A 22.065 22.065 0 0 1 0.47 53.512 A 31.818 31.818 0 0 1 0 48.34 L 0 0.977 L 14.648 0.977 L 14.648 47.901 A 23.168 23.168 0 0 0 14.913 51.529 Q 15.589 55.783 17.993 58.082 A 11.054 11.054 0 0 0 22.945 60.772 Q 24.649 61.216 26.664 61.272 A 21.135 21.135 0 0 0 27.246 61.28 A 16.886 16.886 0 0 0 32.294 60.59 Q 39.645 58.286 39.795 48.291 L 39.795 0.977 Z"
                ref={part2PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#die-mask)">
            <image
              x="-70"
              y="-140"
              width="350"
              height="350"
              xlinkHref="public/svg2.jpg"
            />
          </g>
        </svg>
        <p ref={part2TextRef} className="description part2-text">
          사람은 <span>죽으면</span>, 누군가에게 도움을 줄 수 없습니다. 하지만 물건의
          죽음은 다릅니다. 본래의 쓰임을 다하고 버려졌지만 다른 용도로 사용 될 수
          있습니다. 재활용해서 새로운 물건의 원료가 될 수도 있고 조난 당했을 때 물건을
          보관하는 용도로도 사용 될 수 있습니다. 하지만 최근에는 업사이클링으로 디자인
          요소를 추가해 새로운 물건으로 만드는데 많이 사용되고 있습니다.
        </p>
      </div>

      <div className="part3 part">
        <div className="part-header">
          <div className="part3-main-title part-main-title">새로운 시작</div>
          <div className="part-sub-title">삶과 죽음의 공존</div>
        </div>
        <svg ref={svg3Ref} viewBox="-13 0 213 71" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="new-mask">
              <path
                d="M 180.859 28.809 L 180.859 40.283 L 152.734 40.283 L 152.734 59.326 L 185.742 59.326 L 185.742 71.094 L 138.086 71.094 L 138.086 0 L 185.645 0 L 185.645 11.865 L 152.734 11.865 L 152.734 28.809 L 180.859 28.809 Z M 126.074 30.225 L 126.074 42.041 L 97.949 42.041 L 97.949 71.094 L 83.301 71.094 L 83.301 0 L 129.59 0 L 129.59 11.865 L 97.949 11.865 L 97.949 30.225 L 126.074 30.225 Z M 14.648 0 L 14.648 59.326 L 45.752 59.326 L 45.752 71.094 L 0 71.094 L 0 0 L 14.648 0 Z M 69.727 0 L 69.727 71.094 L 55.078 71.094 L 55.078 0 L 69.727 0 Z"
                ref={part3PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#new-mask)">
            <image
              x="-70"
              y="-140"
              width="350"
              height="350"
              xlinkHref="public/svg3.jpg"
            />
          </g>
        </svg>
        <p ref={part3TextRef} className="description part3-text">
          죽음을 의미하는 버려진 캔과 삶을 의미하는 식물. 버려진 캔은 식물을 만나 생명이
          살아 숨 쉴 수 있는 보금자리가 되어주었고 식물은 버려진 캔을 만나{' '}
          <span>새로운</span> 삶의 터전을 얻었습니다.
        </p>
      </div>

      <div className="part4 part">
        <div className="part-header">
          <div className="part4-main-title part-main-title">어떤 것이라도</div>
          <div className="part-sub-title">재료는 무궁무진하다</div>
        </div>
        <svg ref={svg4Ref} viewBox="-5 0 213 71" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="any-mask">
              <path
                d="M 131.104 0 L 131.104 71.094 L 116.455 71.094 L 87.939 24.316 L 87.939 71.094 L 73.291 71.094 L 73.291 0 L 87.939 0 L 116.504 46.875 L 116.504 0 L 131.104 0 Z M 152.344 0 L 167.041 32.031 L 181.836 0 L 197.852 0 L 174.512 45.313 L 174.512 71.094 L 159.619 71.094 L 159.619 45.313 L 136.279 0 L 152.344 0 Z M 51.074 71.094 L 46.143 56.445 L 20.459 56.445 L 15.576 71.094 L 0 71.094 L 26.465 0 L 40.039 0 L 66.65 71.094 L 51.074 71.094 Z M 33.252 17.969 L 24.414 44.58 L 42.188 44.58 L 33.252 17.969 Z"
                ref={part4PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#any-mask)">
            <image
              x="-70"
              y="-140"
              width="350"
              height="350"
              xlinkHref="public/svg4.jpg"
            />
          </g>
        </svg>
        <p ref={part4TextRef} className="description part4-text">
          일상에서 쉽게 볼 수 있는 물건부터 구하기 힘든 물건들까지 버려진 물건들은
          다양합니다. 만들고 싶은게 <span>어떤</span>것이든 문제없어요! 캔을 잘라 간단하게
          화분을 만들 수도 있고 다양한 재료들을 모와 하나로 합쳐 뭐든 만들 수 있습니다.
        </p>
      </div>
    </Section>
  );
}

export default Section2;
