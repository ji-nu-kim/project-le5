import styled from 'styled-components';

export const Section = styled.div`
  height: 600vh;
  width: 100vw;

  .card {
    position: relative;
    padding: 1rem;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 300px;
    height: 400px;
  }

  .card1 {
    .card1-message {
      color: #fff;
      font-size: 1.5rem;
    }
    .card1-image {
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      height: 95%;
      background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
        url('public/project4.jpg');
      background-size: cover;
      background-position: center;
    }
  }
`;
