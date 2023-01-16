import styled from "styled-components";

type BadgeProps = {
  bg: string | (() => string);
};

export const Container = styled.div`
  display: flex;
  width: 100%;

  .menu-mobile {
    padding: 1rem 5rem;
    background: var(--red-background);
    color: #fff;

    h1 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  main {
    width: 100%;
    background: var(--blue-background);
    padding: 0 5rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
    }

    h1 {
      color: #fff;
      text-transform: uppercase;
      font-weight: normal;
      font-size: 3.6rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    main {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const Aside = styled.aside`
  background-color: var(--red-background);
  min-width: 300px;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: #fff;

  div.input-search-container {
    position: relative;
  }

  div {
    img {
      margin-top: 2rem;
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
    margin: 2rem auto;
    border-radius: 20px;
    border: 1px solid #e89999;
  }

  @media (max-width: 1200px) {
    height: auto;

    p {
      margin-bottom: 1rem;
    }

    hr {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 6rem;
  font-size: 1.6rem;

  div.left-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div.height-weight-container {
    display: flex;
    font-size: 1.4rem;
    gap: 0 2rem;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 2rem 0;
    }
  }

  div.attributes-container {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    gap: 1rem;
  }

  div.evolution-container {
    display: flex;
    justify-content: center;
  }
  div.image-evolution {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  background: var(--background-card-color);
  border-radius: 6px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
  padding: 1rem 2rem;
  gap: 1rem;

  &.main-image {
    justify-content: center;
    align-items: center;
  }
`;
export const Badge = styled.div<BadgeProps>`
  background-color: ${(props) => props.bg};
  border-radius: 8px;
  width: auto !important;
  text-transform: uppercase;
  color: #fff;
  padding: 0.1rem 2rem;
  text-align: center;
  font-size: 1.4rem;
`;
