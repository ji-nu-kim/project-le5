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
    display: grid;
    grid-template-rows: 44px auto 44px;

    .main-title {
      margin-left: 1rem;
      align-self: center;
      font-weight: bold;
      font-size: 1.5rem;
      font-family: 'Rubik', sans-serif;
    }

    .sub-title {
      position: absolute;
      font-weight: bold;
      font-size: 1.5rem;
      color: #ffffff;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
      top: 50%;
      transform: translateY(-50%);
      letter-spacing: 1px;
      word-spacing: 4px;

      .sub1,
      .sub2,
      .sub3 {
        opacity: 0;
      }
    }

    .footer-title {
      margin-right: 1rem;
      justify-self: end;
      font-size: 0.75rem;
      align-self: center;
      font-family: 'Rubik', sans-serif;
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
        font-size: 2rem;
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
  filter: saturate(120%);
  transition: all 0.5s linear;
`;
