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
    width: 100%;
    height: 100%;

    path {
      stroke: #fff;
      fill: #fff;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: all 0.5s linear;
    }
  }

  .part {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 25% 60% 15%;
    align-items: center;
    justify-items: center;

    .part-header {
      align-self: flex-end;
      text-align: center;
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
    .description {
      align-self: flex-start;
      margin: 0 auto;
      font-size: 0.7rem;
      visibility: hidden;
      opacity: 0;
      max-width: 70%;
      text-align: justify;
      color: #333;

      span {
        font-size: 0.9rem;
        font-weight: bold;
      }
    }
  }

  .part1 {
    .part1-main-title {
      color: #a9db4c;
    }
    .part1-description {
      span {
        color: #a809d9;
      }
    }
  }

  .part2 {
    svg {
    }
    .part2-main-title {
      color: #f06f02;
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

  @media (min-width: 548px) {
    .part {
      .part-header {
        padding-bottom: 1rem;
      }
      .description {
        align-self: center;
        font-size: 0.8rem;
        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .part {
      .description {
        max-width: 60%;
      }
    }
  }

  @media (min-width: 1024px) {
    .part {
      .part-header {
        .part-main-title {
          font-size: 4rem;
        }
        .part-sub-title {
          font-size: 2rem;
        }
      }
      .description {
        font-size: 0.9rem;
        span {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    svg {
      width: 70%;
    }
  }

  @media (min-width: 1440px) {
    svg {
      width: 60%;
    }
    .part {
      .part-header {
        .part-main-title {
          font-size: 4.5rem;
        }
        .part-sub-title {
          font-size: 2.5rem;
        }
      }
      .description {
        font-size: 1rem;
        span {
          font-size: 1.2rem;
        }
        max-width: 50%;
      }
    }
  }

  @media (min-width: 1740px) {
    svg {
      width: 50%;
    }
    .part {
      .description {
        max-width: 40%;
      }
    }
  }
`;
