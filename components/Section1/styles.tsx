import styled from 'styled-components';

interface IBackgroundImage {
  image: string;
}

export const ChangableImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props: IBackgroundImage) => props.image});
  background-size: cover;
  background-position: center;
  filter: saturate(180%) contrast(70%);
  transition: all 0.5s linear;
`;

export const Section = styled.section`
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

    .logo {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
      font-weight: bold;
      font-size: 1.25rem;
      color: #fff;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
    }

    .title-container {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 10;
      color: #ffffff;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);

      .main-title {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2.5rem;

        .main-text-point1,
        .main-text-point2 {
          position: relative;
          color: #60a66b;
          opacity: 0;
          transition: all 0.5s linear;
        }

        .main-text-point1 {
          ::after {
            content: '쓰레기';
          }
        }
        .main-text-point2 {
          ::after {
            content: '물건';
          }
        }
      }

      .sub-title {
        font-size: 0.9rem;
        display: flex;
        margin-top: 0.5rem;

        .sub-text-point {
          transform: perspective(300px) translateZ(300px);
          transition: all 0.2s ease-in;
        }
      }
    }

    .image-container {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 768px) {
      .title-container {
        left: 20%;
        .main-title {
          font-size: 2rem;
        }
        .sub-title {
          font-size: 1rem;
        }
      }
    }

    @media (min-width: 1440px) {
      .logo {
        font-size: 1.5rem;
      }

      .title-container {
        left: 30%;
        .main-title {
          font-size: 2.5rem;
          line-height: 3rem;
        }
        .sub-title {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
