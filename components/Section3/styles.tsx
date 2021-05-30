import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  height: 600vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  .sticky-outer {
    position: relative;
    width: 100vw;
    height: 198vh;
    display: grid;
    grid-template-rows: 25vh 148vh 25vh;

    .sticky-title {
      font-weight: bold;
      font-size: 2.3rem;
      align-self: flex-end;
      justify-self: center;
      transition: all 0.2s linear;
      padding-bottom: 1rem;
    }

    .title1 {
      background: linear-gradient(150deg, #fdc830, #f37335);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title2 {
      background: linear-gradient(150deg, #1d976c, #93f9b9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title3 {
      background: linear-gradient(150deg, #cc2b5e, #753a88);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sticky-inner {
      position: relative;
      width: 100vw;
      display: flex;
      justify-content: center;

      .elem1 {
        background: url('public/sticky1.jpg');
      }
      .elem2 {
        background: url('public/sticky2.jpg');
      }
      .elem3 {
        background: url('public/sticky3.jpg');
      }
      .sticky-elem {
        position: sticky;
        top: 140px;
        width: 100vw;
        height: 60vh;
        transition: all 0.2s ease-out;
        background-position: center;
        background-size: cover;
        filter: saturate(150%);
      }
    }
    .sticky-description {
      padding-top: 1rem;
      text-align: justify;
      font-size: 0.8rem;
      max-width: 250px;
      justify-self: center;
      transition: all 0.5s linear;
    }

    @media (min-width: 768px) {
      .sticky-title {
        font-size: 3rem;
        padding-bottom: 0;
      }
      .sticky-inner {
        .sticky-elem {
          width: 60vw;
        }
      }
      .sticky-description {
        font-size: 0.9rem;
        max-width: 300px;
      }
    }
    @media (min-width: 1024px) {
      .sticky-title {
        font-size: 3.5rem;
      }
    }

    @media (min-width: 1440px) {
      .sticky-inner {
        .sticky-elem {
          width: 50vw;
        }
      }
    }
  }
`;
