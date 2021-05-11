import styled, { keyframes } from 'styled-components';

const colorAni = keyframes`0% { opacity: 0; filter: hue-rotate(0deg); } 100% { opacity: 1; filter: hue-rotate(360deg); }`;

export const Section = styled.section`
  height: 500vh;
  font-family: 'Roboto', sans-serif;

  h1,
  p {
    margin: 0;
  }

  .stikcy-container {
    position: sticky;
    top: 0;
    .cover-image {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url('public/background.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .text-container {
      width: 100vw;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      * {
        position: absolute;
        padding: 0 10vw;
        /* opacity: 0;
        visibility: hidden;  */
      }
      h1 {
        transform-origin: center;
        font-weight: 900;
        font-size: 4rem;
      }
      .text-hello {
        opacity: 1;
        visibility: visible;
        background: linear-gradient(to right, #ee9ca7, #ffdde1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .text-name {
        transform: translateY(-50px);
        background: linear-gradient(
          to right,
          rgba(156, 156, 238, 1) 0%,
          rgba(221, 228, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        line-height: 1.4;
        text-align: justify;
        word-break: break-all;
        font-size: 2rem;
      }
    }
  }
`;
