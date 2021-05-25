import styled, { keyframes } from 'styled-components';


export const Section = styled.section`
  font-family: 'Noto Sans KR', sans-serif;
  height: 500vh;

  h1, h2,
  p {
    margin: 0;
  }

  .stikcy-container {
    background: url('public/background.jpg');
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;


    .bg-black {
      background: #000;
      width: 100%;
      height: 100%;
    }
    .bg-white {
      position: absolute;
      top: 0;
      left: 100%;

      background: #fff;
      width: 100%;
      height: 100%;
    }

    .text-1 {
      mix-blend-mode: difference;
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      font-size: 3rem;
      font-weight: bold;
    }
  }
`;

// background: linear-gradient(to right, #E8CBC0, #636FA4);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;