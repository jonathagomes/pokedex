import Image from "next/image";
import { useTheme } from "next-themes";

import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./styles";
const navList = [
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
  {
    name: "Bulbasaur",
  },
];
const DashboardPage = () => {
  const { setTheme } = useTheme();
  return (
    <S.Container>
      <S.Aside>
        <div>
          <Image
            src="/img/logo-pokedex.png"
            alt="Pokedex"
            width={297}
            height={61}
          />
          <p>
            Everything you wanted to know about <br /> your favorite pocket
            monsters!
          </p>
          <div style={{ position: "relative" }}>
            <input placeholder="Search by name or number" />
            <AiOutlineSearch
              size={24}
              color="#747474"
              title="Search"
              style={{
                padding: "4px",
                position: "absolute",
                boxSizing: "border-box",
                top: "50%",
                right: "45px",
                transform: "translateY(calc(50% - 1rem))",
              }}
            />
          </div>
        </div>
        <hr />
        <S.Nav
          style={{
            height: "100vh",
            overflowX: "scroll",
          }}
        >
          <ul>
            {navList.map((item, ind) => {
              return (
                <li key={ind} className={ind + 1 == 1 ? "active" : ""}>
                  #
                  {ind + 1 < 10
                    ? `00${ind + 1}`
                    : ind + 1 < 100
                    ? `0${ind + 1}`
                    : ind + 1}{" "}
                  - {item.name}
                </li>
              );
            })}
          </ul>
        </S.Nav>
      </S.Aside>
      <main
        style={{
          width: "100%",
          background: "var(--blue-background);",
        }}
      >
        <button onClick={() => setTheme("dark")}>dark</button>
        <button onClick={() => setTheme("light")}>light</button>
        <h1>Não tá funcionando nada :D</h1>
      </main>
    </S.Container>
  );
};

export { DashboardPage };
