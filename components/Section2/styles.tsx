import styled from 'styled-components';

export const Section = styled.section`
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;

  h1,
  p {
    margin: 0;
    letter-spacing: -0.1px;
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
    font-size: 0.85rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s linear;
    max-width: 250px;
    text-align: justify;
    color: #333;
    margin-left: 25px;

    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .part {
    margin-top: 150px;
    .part-title {
      margin-bottom: 50px;
    }
    .part-main-title {
      font-size: 3rem;
      font-weight: bold;
    }
    .part-sub-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #888;
    }
  }

  .part1 {
    margin-top: 200px;
    .part1-main-title {
      color: #a9db4c;
    }
    .part1-svg {
      transform: rotateZ(-5deg);
    }
    .part1-description {
      span {
        color: #a809d9;
      }
    }
  }

  .part2 {
    .part2-main-title {
      color: #f06f02;
    }
    .part2-svg {
      transform: rotateZ(5deg);
    }
    .part2-text {
      span {
        color: #02c9f0;
      }
    }
  }

  .part3 {
    .part3-main-title {
      color: #d91468;
    }
    .part3-text {
      span {
        color: #d9a11e;
      }
    }
  }

  .part4 {
    .part4-main-title {
      color: #14b9d9;
    }
    .part4-text {
      span {
        color: #92d914;
      }
    }
  }

  @media (min-width: 768px) {
    svg {
      width: 400px;
      height: 400px;
    }

    .description {
      font-size: 1rem;
      max-width: 300px;
      margin-left: 50px;

      span {
        font-size: 1.25rem;
      }
    }

    .part {
      margin-top: 200px;
      .part-main-title {
        font-size: 4rem;
      }
      .part-sub-title {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 1100px) {
    display: block;
    padding: 0 10vw;

    svg {
      width: 500px;
      height: 500px;
    }

    .description {
      mix-blend-mode: multiply;
      font-size: 1rem;
      max-width: 400px;
      margin-left: 50px;

      span {
        font-size: 1.25rem;
      }
    }

    .part {
      border-radius: 50%;
      margin-top: 150px;

      .part-title {
        mix-blend-mode: multiply;
        .part-main-title {
          font-size: 4.5rem;
        }
        .part-sub-title {
          font-size: 2.5rem;
        }
      }
    }

    .part2,
    .part4 {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: end;
      .description {
        margin-right: 50px;
      }
    }

    .part1 {
      background: linear-gradient(
        150deg,
        rgba(238, 156, 167, 0.8),
        rgba(255, 221, 225, 0.8)
      );
    }

    .part2 {
      background: linear-gradient(
        150deg,
        rgba(41, 128, 185, 0.8),
        rgba(109, 213, 250, 0.8),
        rgba(255, 255, 255, 0.8)
      );
    }

    .part3 {
      background: linear-gradient(
        150deg,
        rgba(247, 255, 0, 0.8),
        rgba(219, 54, 164, 0.8)
      );
    }

    .part4 {
      background: linear-gradient(
        150deg,
        rgba(168, 255, 120, 0.8),
        rgba(120, 255, 214, 0.8)
      );
    }
  }

  @media (min-width: 1440px) {
    padding: 0 25vw;
  }

  @media (min-width: 1024px) and (min-height: 1360px) {
    svg {
      width: 600px;
      height: 600px;
    }

    .description {
      font-size: 1.25rem;
      max-width: 500px;
      margin-left: 50px;

      span {
        font-size: 1.5rem;
      }
    }

    .part {
      margin-top: 300px;
      .part-main-title {
        font-size: 5rem;
      }
      .part-sub-title {
        font-size: 3rem;
      }
    }
  }
`;
