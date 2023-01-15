import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch, AiOutlineRight } from "react-icons/ai";

import { useWindowSize } from "hooks/useWindowSize";

import { ThemeSwitcher } from "components/ThemeSwitcher";

import { colorsTypeMonsters } from "styles/colorsTypeMonsters";

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
  const [navigationIsVisibility, setNavigationIsVisibility] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();
  const { pokemon_id } = router.query;
  const pokemonId = pokemon_id ? +pokemon_id : undefined;

  const formatNumber = (number = 0) => {
    return number < 10 ? `00${number}` : number < 100 ? `0${number}` : number;
  };

  useEffect(() => {
    setNavigationIsVisibility(false);
  }, [router]);

  const RenderNavigationList = () => {
    return (
      <S.Nav>
        <ul>
          {navList.map((item, ind) => {
            return (
              <li key={ind} className={ind + 1 == pokemonId ? "active" : ""}>
                <Link href={`/dashboard/${ind + 1}`}>
                  #{formatNumber(ind + 1)}- {item.name}
                </Link>
              </li>
            );
          })}
          #TODO PAGINAÇÃO
        </ul>
      </S.Nav>
    );
  };

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
          {width ? width < 1200 ? <ThemeSwitcher /> : null : null}
          <div className="input-search-container">
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
                right: "15%",
                transform: "translateY(calc(50% - 1rem))",
              }}
            />
          </div>
        </div>
        <hr />
        {width ? width >= 1200 ? <RenderNavigationList /> : null : null}
      </S.Aside>
      {width ? (
        width < 1200 ? (
          <div className="menu-mobile">
            <h1
              onClick={() => setNavigationIsVisibility(!navigationIsVisibility)}
            >
              <AiOutlineRight
                style={{
                  transition: "all 0.5s ease",
                  transform: navigationIsVisibility ? "rotate(90deg)" : "",
                }}
              />{" "}
              Menu
            </h1>
            {navigationIsVisibility ? <RenderNavigationList /> : null}
          </div>
        ) : null
      ) : null}
      <main>
        <header>
          <div>
            <h1>
              #{formatNumber(pokemonId)} - Bulbasaur{" "}
              <Image
                src="/img/icon-pokemon.png"
                alt="Pokemon name"
                height={100}
                width={100}
              />
            </h1>
          </div>
          {width ? width >= 1200 ? <ThemeSwitcher /> : null : null}
        </header>
        <S.Content>
          <div className="left-content">
            <S.Card
              className="main-image"
              style={{
                padding: "0 8rem",
              }}
            >
              <Image
                src="/img/pokemon.png"
                alt="Pokemon name"
                height={256}
                width={256}
              />
            </S.Card>
            <S.Card>
              <b>Type</b>
              <S.Badge bg={colorsTypeMonsters["grass"]}>Grass</S.Badge>
              <S.Badge bg={colorsTypeMonsters["poison"]}>Poison</S.Badge>
            </S.Card>
            <div className="height-weight-container">
              <S.Card style={{ gap: "0" }}>
                <b>Height:</b> 2&apos;04&apos;&apos; / 0.7 m
              </S.Card>
              <S.Card style={{ gap: "0" }}>
                <b>Weight:</b> 15.lbs. / 6.9kg
              </S.Card>
            </div>
            <S.Card
              style={{
                flexDirection: "column",
              }}
            >
              <b>Attributes</b>
              <div className="attributes-container">
                <S.Badge bg="#ff5958">45 Hp</S.Badge>
                <S.Badge bg="#ff76a2">45 Speed</S.Badge>
                <S.Badge bg="#ff9a58">45 Atk</S.Badge>
                <S.Badge bg="#ffca00">45 Def</S.Badge>
                <S.Badge bg="#006dea">45 Sp. Atk.</S.Badge>
                <S.Badge bg="#4cc752">45 Sp. Def.</S.Badge>
              </div>
            </S.Card>
          </div>
          <div>
            <S.Card
              style={{
                flexDirection: "column",
              }}
            >
              <b>Evolution</b>
              <div className="evolution-container">
                <div className="image-evolution">
                  <Image
                    src="/img/pokemon.png"
                    alt="Pokemon name"
                    height={128}
                    width={128}
                  />
                  <span>Bulbasaur</span>
                </div>
                <div className="image-evolution">
                  <Image
                    src="/img/pokemon.png"
                    alt="Pokemon name"
                    height={128}
                    width={128}
                  />
                  <span>Bulbasaur</span>
                </div>
              </div>
            </S.Card>
            <S.Card
              style={{
                margin: "3rem 0",
                minHeight: "30rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              ullam eos expedita labore quasi, laborum cupiditate debitis quidem
              inventore, officiis qui rem repellat sed atque ex enim quisquam,
              facilis ipsa.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              ullam eos expedita labore quasi, laborum cupiditate debitis quidem
              inventore, officiis qui rem repellat sed atque ex enim quisquam,
              facilis ipsa.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              ullam eos expedita labore quasi, laborum cupiditate debitis quidem
              inventore, officiis qui rem repellat sed atque ex enim quisquam,
              facilis ipsa.
            </S.Card>
          </div>
        </S.Content>
      </main>
    </S.Container>
  );
};

export { DashboardPage };
