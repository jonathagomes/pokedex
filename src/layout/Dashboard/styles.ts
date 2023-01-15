import styled from "styled-components";

type BadgeProps = {
  bg: string;
};

export const Container = styled.div`
  display: flex;
  width: 100%;

  .menu-mobile {
    padding: 0 5rem;
    background: var(--red-background);

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

    div.theme-switcher-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    h1 {
      font-size: 2rem;
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

  @media (max-width: 1200px) {
    height: auto;

    hr {
      display: none;
    }
  }
`;

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
`;
