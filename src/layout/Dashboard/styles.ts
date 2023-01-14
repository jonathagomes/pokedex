import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Aside = styled.aside`
  background-color: var(--red-background);
  min-width: 300px;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: #fff;

  div {
    padding: 2rem 1rem 1rem 0;

    img {
      transform: scale(0.8);
    }

    p {
      font-size: 1.2rem;
    }

    input {
      width: 80%;
      padding: 1rem;
      border: none;
      border-radius: 20px;
      margin-top: 2rem;
      background-color: var(--background-input-color);
    }
  }

  hr {
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid #e89999;
  }
`;

export const Nav = styled.nav`
  margin-top: 2rem;
  text-align: left;
  font-size: 1.6rem;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #07053c;
    border-radius: 20px;
    border: 3px solid #fff;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;

    margin-left: 3rem;

    li {
      &.active {
        font-size: 1.8rem;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;
