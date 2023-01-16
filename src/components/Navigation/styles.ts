import styled from "styled-components";

export const Nav = styled.nav`
  height: calc(100vh - 25rem);
  overflow-y: scroll;
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
      text-transform: capitalize;
      transition: all 0.5s;

      &:hover {
        font-size: 1.8rem;
        font-weight: bold;
        text-decoration: underline;
      }
      &.active {
        font-size: 1.8rem;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 8px;

      &:nth-child(2) {
        cursor: auto;
        background: transparent;
      }
    }
  }
`;
