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
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-family: 'Rubik', sans-serif;

      .main-text {
        font-size: 5rem;
      }
      .sub-text {
        font-size: 1.2rem;
      }
    }

    .sub-title {
      z-index: 5;
      padding: 1rem;
      opacity: 0;
      font-weight: bold;
      font-size: 1rem;
      max-width: 250px;
      text-align: justify;
    }

    .sub1 {
      background: rgba(0, 0, 0, 0.4);
      top: 5%;
      left: 5%;
    }

    .sub2 {
      background: rgba(0, 60, 255, 0.4);
      top: 25%;
      left: 30%;
    }

    .sub3 {
      background: rgba(255, 51, 0, 0.4);
      top: 80%;
      left: 15%;
    }

    .sub4 {
      background: rgba(94, 255, 0, 0.4);
      top: 12%;
      left: 35%;
      transform: rotate(-10deg);
    }

    .sub5 {
      background: rgba(255, 238, 0, 0.4);
      top: 40%;
      left: 10%;
      transform: rotate(10deg);
    }

    .sub6 {
      background: rgba(212, 0, 255, 0.4);
      top: 65%;
      left: 40%;
      transform: rotate(-25deg);
    }

    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 768px) {
      .sub-title {
        font-size: 1.25rem;
        max-width: 300px;
      }
      .sub2 {
        top: 20%;
        left: 35%;
      }

      .sub3 {
        top: 70%;
        left: 20%;
      }

      .sub4 {
        top: 5%;
        left: 55%;
      }

      .sub6 {
        left: 65%;
      }
    }
  }
`;

export const ChangableImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props: IBackgroundImage) => props.image});
  background-size: cover;
  background-position: center;
  filter: saturate(180%);
  transition: all 0.5s linear;
`;
