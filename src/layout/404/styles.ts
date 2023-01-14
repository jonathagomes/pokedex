import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background: var(--red-background);
  text-align: center;
  color: #f2f2f2;

  button {
    z-index: 999;
    margin-bottom: 2rem;
    width: 23.1rem;
    height: 6.6rem;
    background: #f2cb07;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 12px;
    font-size: 2.4rem;
    font-weight: bold;
    color: #212121;
    transition: filter 0.5s ease-out;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
