import styled, { keyframes } from 'styled-components';

interface IBackgroundImage {
  image: string;
}

export const Section = styled.section`
  font-family: 'Noto Sans KR', sans-serif;
  height: 500vh;

  h1,
  h2,
  p {
    margin: 0;
  }

  .stikcy-container {
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;

    .main-title,
    .sub-title {
      position: absolute;
      color: #ffffff;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    }

    .main-title {
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-family: 'Rubik', sans-serif;

      .main-text {
        font-size: 6rem;
      }
    }

    .sub-title {
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      font-weight: bold;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
    }

    .sub1 {
      transform: perspective(300px) translateZ(300px);
    }

    .sub2 {
      transform: perspective(300px) translateZ(300px);
    }

    .sub3 {
      transform: perspective(300px) translateZ(300px);
    }

    .image-container {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 768px) {
      .main-title {
        .main-text {
          font-size: 10rem;
        }
      }
      .sub-title {
        font-size: 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .main-title {
        .main-text {
          font-size: 12rem;
        }
      }
    }
    @media (min-width: 1024px) and (min-height: 1360px) {
      .sub-title {
        top: 60%;
        font-size: 2.5rem;
      }
    }
  }
`;

export const ChangableImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props: IBackgroundImage) => props.image});
  background-size: cover;
  background-position: center;
  filter: saturate(180%);
  transition: all 0.5s linear;
`;
