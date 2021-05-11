import { centerHeight } from '@utils/centerHeight';
import React, { useRef } from 'react';
import { Section } from './styles';

interface Props {
  scrollPercent: number;
}

const Section2 = ({ scrollPercent }: Props) => {
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

  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg1 = svg1Ref.current;
  const svg2Ref = useRef<SVGSVGElement>(null);
  const svg2 = svg2Ref.current;
  const svg3Ref = useRef<SVGSVGElement>(null);
  const svg3 = svg3Ref.current;

  if (
    svg1 &&
    svg2 &&
    svg3 &&
    part1Path &&
    part2Path &&
    part3Path &&
    part1Text &&
    part2Text &&
    part3Text
  ) {
    if (scrollPercent > 0.32 && scrollPercent < 0.75) {
      svg1.style.visibility = 'visible';
      svg2.style.visibility = 'visible';
      svg3.style.visibility = 'visible';
      part1Path.style.visibility = 'visible';
      part2Path.style.visibility = 'visible';
      part3Path.style.visibility = 'visible';
      part1Text.style.visibility = 'visible';
      part2Text.style.visibility = 'visible';
      part3Text.style.visibility = 'visible';
    } else {
      svg1.style.visibility = 'hidden';
      svg2.style.visibility = 'hidden';
      svg3.style.visibility = 'hidden';
      part1Path.style.visibility = 'hidden';
      part2Path.style.visibility = 'hidden';
      part3Path.style.visibility = 'hidden';
      part1Text.style.visibility = 'hidden';
      part2Text.style.visibility = 'hidden';
      part3Text.style.visibility = 'hidden';
    }

    const part1Trigger = centerHeight(svg1, window.innerHeight / 2);
    const part2Trigger = centerHeight(svg2, window.innerHeight / 2);
    const part3Trigger = centerHeight(svg3, window.innerHeight / 2);

    if (part1Trigger) {
      part1Path.style.transition = 'all 0.5s linear';
      part1Path.style.strokeWidth = '100';

      part1Text.style.opacity = '1';
      part1Text.style.visibility = 'visible';
      part1Text.style.transform = 'translateY(50px)';
      part1Text.style.transition = 'all 0.7s linear';
    } else {
      part1Path.style.strokeWidth = '3';

      part1Text.style.opacity = '0';
      part1Text.style.visibility = 'hidden';
      part1Text.style.transform = 'translateY(100px)';
    }

    if (part2Trigger) {
      part2Path.style.transition = 'all 0.5s linear';
      part2Path.style.strokeWidth = '100';

      part2Text.style.opacity = '1';
      part2Text.style.visibility = 'visible';
      part2Text.style.transform = 'translateY(50px)';
      part2Text.style.transition = 'all 0.7s linear';
    } else {
      part2Path.style.strokeWidth = '3';

      part2Text.style.opacity = '0';
      part2Text.style.visibility = 'hidden';
      part2Text.style.transform = 'translateY(100px)';
    }

    if (part3Trigger) {
      part3Path.style.transition = 'all 0.5s linear';
      part3Path.style.strokeWidth = '150';

      part3Text.style.opacity = '1';
      part3Text.style.visibility = 'visible';
      part3Text.style.transform = 'translateY(50px)';
      part3Text.style.transition = 'all 0.7s linear';
    } else {
      part3Path.style.strokeWidth = '3';

      part3Text.style.opacity = '0';
      part3Text.style.visibility = 'hidden';
      part3Text.style.transform = 'translateY(100px)';
    }
  }

  return (
    <Section>
      <div className="part1">
        <svg
          ref={svg1Ref}
          className="part1-svg"
          viewBox="2 0 158.399 72.071"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="le5-mask">
              <path
                className="part1-path"
                d="M 98.291 28.223 L 98.291 40.967 L 71.338 40.967 L 71.338 57.91 L 103.174 57.91 L 103.174 71.094 L 54.199 71.094 L 54.199 0 L 103.271 0 L 103.271 13.232 L 71.338 13.232 L 71.338 28.223 L 98.291 28.223 Z M 123.193 39.404 L 110.107 36.328 L 114.453 0 L 156.006 0 L 156.006 12.793 L 127.832 12.793 L 126.221 26.904 A 13.582 13.582 0 0 1 127.694 26.17 Q 128.499 25.823 129.455 25.51 A 29.308 29.308 0 0 1 130.835 25.098 A 21.718 21.718 0 0 1 135.181 24.357 A 19.468 19.468 0 0 1 136.426 24.316 A 28.617 28.617 0 0 1 142.991 25.024 Q 148.932 26.424 152.71 30.591 A 20.65 20.65 0 0 1 157.19 38.824 Q 158.398 42.972 158.398 48.193 Q 158.398 55.029 155.347 60.571 A 20.975 20.975 0 0 1 146.777 69.092 Q 141.26 72.07 133.74 72.07 A 29.091 29.091 0 0 1 121.191 69.312 A 24.353 24.353 0 0 1 115.404 65.56 A 20.96 20.96 0 0 1 112.012 61.743 A 18.374 18.374 0 0 1 108.74 51.054 A 21.732 21.732 0 0 1 108.74 50.879 L 125.244 50.879 A 11.936 11.936 0 0 0 125.709 53.582 A 8.356 8.356 0 0 0 127.734 57.08 A 7.527 7.527 0 0 0 132.266 59.287 A 10.484 10.484 0 0 0 133.643 59.375 A 7.71 7.71 0 0 0 137.919 58.24 Q 140.97 56.267 141.708 50.865 A 28.16 28.16 0 0 0 141.943 47.07 Q 141.943 37.333 134.504 35.93 A 14.667 14.667 0 0 0 131.787 35.693 A 14.162 14.162 0 0 0 128.397 36.074 A 9.048 9.048 0 0 0 123.193 39.404 Z M 17.139 0 L 17.139 57.91 L 46.973 57.91 L 46.973 71.094 L 0 71.094 L 0 0 L 17.139 0 Z"
                ref={part1PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#le5-mask)">
            <image
              x="-40"
              y="-90"
              width="250"
              height="250"
              xlinkHref="public/project1.jpg"
            />
          </g>
        </svg>
        <p ref={part1TextRef} className="description part1-text">
          <span>LE5</span> is a word made by combining the number 5 with the 'le' from
          'leggo'. The number 5 is pronounced ɡoʊ in Japanese. LE5 is a project that
          represents a new beginning and discovers the possibility of discarded objects.
        </p>
      </div>

      <div className="part2">
        <svg
          ref={svg2Ref}
          className="part2-svg"
          viewBox="0 0 143.896 71.095"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="life-mask">
              <path
                className="part2-path"
                d="M 138.916 28.224 L 138.916 40.968 L 111.963 40.968 L 111.963 57.911 L 143.799 57.911 L 143.799 71.095 L 94.824 71.095 L 94.824 0.001 L 143.896 0.001 L 143.896 13.233 L 111.963 13.233 L 111.963 28.224 L 138.916 28.224 Z M 23.389 71.095 L 0 71.095 L 0 0.001 L 22.9 0.001 A 35.672 35.672 0 0 1 33.679 1.587 A 31.771 31.771 0 0 1 39.844 4.273 Q 47.363 8.546 51.587 16.334 Q 55.811 24.122 55.859 33.79 L 55.859 37.061 A 39.675 39.675 0 0 1 54.554 47.407 A 33.872 33.872 0 0 1 51.733 54.566 A 30.161 30.161 0 0 1 40.112 66.676 A 32.693 32.693 0 0 1 24.535 71.072 A 38.67 38.67 0 0 1 23.389 71.095 Z M 82.91 0.001 L 82.91 71.095 L 65.82 71.095 L 65.82 0.001 L 82.91 0.001 Z M 22.9 13.233 L 17.139 13.233 L 17.139 57.911 L 23.096 57.911 A 16.496 16.496 0 0 0 27.954 57.233 A 12.536 12.536 0 0 0 34.424 52.662 Q 37.249 48.912 38.056 42.559 A 43.74 43.74 0 0 0 38.379 37.061 L 38.379 33.985 A 42.965 42.965 0 0 0 38.03 28.316 Q 37.205 22.131 34.424 18.458 A 12.842 12.842 0 0 0 25.665 13.425 A 19.21 19.21 0 0 0 22.9 13.233 Z"
                ref={part2PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#life-mask)">
            <image
              x="-40"
              y="-120"
              width="250"
              height="250"
              xlinkHref="public/project2.jpg"
            />
          </g>
        </svg>
        <p ref={part2TextRef} className="description part2-text">
          When a person <span>dies</span>, he cannot help someone, but the death of an
          object is different. Objects can be recycled and used in many places. For
          example, it can be used as a home for other creatures or as an objet!
        </p>
      </div>

      <div className="part3">
        <svg
          ref={svg3Ref}
          className="part3-svg"
          viewBox="2 0 206.396 71.094"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="start-mask">
              <path
                className="part3-path"
                d="M 171.338 0 L 181.25 44.58 L 189.404 0 L 206.396 0 L 191.309 71.094 L 173.535 71.094 L 164.014 30.566 L 154.688 71.094 L 136.963 71.094 L 121.826 0 L 138.867 0 L 147.021 44.58 L 156.787 0 L 171.338 0 Z M 59.375 0 L 59.375 71.094 L 42.334 71.094 L 17.139 26.855 L 17.139 71.094 L 0 71.094 L 0 0 L 17.139 0 L 42.285 44.238 L 42.285 0 L 59.375 0 Z M 114.307 28.223 L 114.307 40.967 L 87.354 40.967 L 87.354 57.91 L 119.189 57.91 L 119.189 71.094 L 70.215 71.094 L 70.215 0 L 119.287 0 L 119.287 13.232 L 87.354 13.232 L 87.354 28.223 L 114.307 28.223 Z"
                ref={part3PathRef}
              />
            </mask>
          </defs>
          <g mask="url(#start-mask)">
            <image
              x="-70"
              y="-150"
              width="350"
              height="350"
              xlinkHref="public/project3.jpg"
            />
          </g>
        </svg>
        <p ref={part3TextRef} className="description part3-text">
          Project LE5 combines an abandoned can for death and a plant for life. I would
          like to convey the hope that we can <span>new</span> start over to all beings
          who have lost their meaning to live.
        </p>
      </div>

      <div className="part4"></div>
    </Section>
  );
};

export default Section2;

{
  /* <svg className="part4-svg" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient
    id="rainbow"
    x1="0"
    x2="0"
    y1="0"
    y2="100%"
    gradientUnits="userSpaceOnUse"
  >
    <stop stop-color="#FF5B99" offset="0%" />
    <stop stop-color="#FF5447" offset="20%" />
    <stop stop-color="#FF7B21" offset="40%" />
    <stop stop-color="#EAFC37" offset="60%" />
    <stop stop-color="#4FCB6B" offset="80%" />
    <stop stop-color="#51F7FE" offset="100%" />
  </linearGradient>
  <path id="text-curve" d="M1,1 c2,300 300,0 300.1000061035156,300"></path>
</defs>
<text fontSize="3rem" fill="url(#rainbow)">
  <textPath href="#text-curve">Recycle!</textPath>
</text>
</svg> */
}
