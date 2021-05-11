import styled from 'styled-components';

export const Section = styled.section`
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  h1,
  p {
    margin: 0;
    letter-spacing: -0.1px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  svg {
    width: 300px;
    height: 300px;
    path {
      stroke: #fff;
      fill: #fff;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: all 0.5s linear;
    }
  }

  .description {
    font-size: 14px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s linear;
    max-width: 300px;
    font-family: 'Courier New', Courier, monospace;
    text-align: justify;
    text-indent: 3px;
    word-break: break-all;
  }

  .part1 {
    padding-top: 300px;
    .part1-svg {
      transform: rotateZ(-10deg);
    }
    .part1-text {
      span {
        color: #d5d95b;
      }
    }
  }

  .part2 {
    padding-top: 200px;
    .part2-svg {
      transform: rotateZ(10deg);
    }
    .part2-text {
      span {
        color: #f26b1d;
      }
    }
  }

  .part3 {
    padding-top: 200px;
    .part3-text {
      span {
        color: #0477bf;
      }
    }
  }

  /* background: linear-gradient(
      75deg,
      #8983ba,
      #9e98cc 20%,
      #c29abe 38%,
      #e197b0 56%,
      #ff9a7d 74%,
      #ffb467 84%,
      #ffda8e
    ); */

  .part4 {
    padding-top: 200px;
  }
`;
