import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  height: 600vh;
  width: 100vw;
  border: 3px solid #000;

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  .sticky-container {
    margin-top: 500px;
    position: sticky;
    top: 100px;
    width: 300px;
    height: 300px;
    background: coral;
  }

  .relative-container {
    margin-top: 500px;
    position: relative;
    width: 300px;
    height: 300px;
    background: coral;
  }
`;
