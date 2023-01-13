import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  background-color: #dd4b4a;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    max-width: 1220px;
    margin: 0 auto;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 12rem);
  width: 100%;
  background-color: #fdfdfd;

  div {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
  }

  img {
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    input {
      width: 350px;
      padding: 1rem 2rem;
      border-radius: 4px;
      border: 1px solid #efeff1;
      box-shadow: 1px 1px 1px #efeff1;
      font-size: 1.5rem;
    }

    p {
      font-size: 1.6rem;
      color: #ff3333;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 12rem;
      color: #ffffff;
      background-color: #0055d1;
      box-shadow: 1px 1px 1px #0055d1;
      border-radius: 4px;
      font-weight: bold;
      transition: all 0.5s ease-in-out;

      &:hover:not(:disabled) {
        transform: translateY(-6px) scale(1.025);
      }

      &:disabled {
        background: #ddd;
        box-shadow: 1px 1px 1px #ddd;
        cursor: not-allowed;
      }
    }
  }
`;
