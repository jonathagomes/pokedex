import type { Pokemon } from "types/Pokemon";
import Image from "next/image";
import client from "graphql/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineRight } from "react-icons/ai";

import GET_ALL_POKEMONS from "graphql/queries/getAllPokemons";

import { useWindowSize } from "hooks/useWindowSize";

import { ThemeSwitcher } from "components/ThemeSwitcher";
import { Navigation } from "components/Navigation";

import { formatNumber } from "utils/formatNumber";

import { colorsTypeMonsters } from "styles/colorsTypeMonsters";

import * as S from "./styles";

type Props = {
  pokemon: Pokemon;
};

type PokemonList = {
  id: number;
  name: string;
};

const DashboardPage = ({ pokemon }: Props) => {
  const [navigationIsVisibility, setNavigationIsVisibility] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonList[]>([]);
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    setNavigationIsVisibility(false);
  }, [router]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 0) return;

    const variables = { offset: 0, limit: 1300 };
    let suggestion = [];
    const { pokemons: data } = await client.request(
      GET_ALL_POKEMONS,
      variables,
    );

    suggestion = data.results.filter(
      (el: PokemonList) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.id.toString().includes(e.target.value.toLowerCase()),
    );

    setSearch(e.target.value);
    setFilteredPokemons(suggestion);
  };

  const mainImageUrl = `${process.env.NEXT_PUBLIC_POKEAPI_SPRITES_ANIMATED_URL}/${pokemon.id}.gif`;

  const meters = pokemon.height / 10;
  const inchesTotal = meters / 0.0254;
  const feets = Math.floor(inchesTotal / 12);
  const inches = Math.round(inchesTotal - 12 * feets);

  if (!pokemon) {
    return <h1>Loading...</h1>;
  }

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
            <input
              placeholder="Search by name or number"
              onChange={handleSearch}
              type="text"
            />
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

        {width ? (
          width >= 1200 ? (
            search.length > 0 ? (
              <Navigation pokemonsProps={filteredPokemons} />
            ) : (
              <Navigation />
            )
          ) : null
        ) : null}
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
            {navigationIsVisibility ? (
              search.length > 0 ? (
                <Navigation pokemonsProps={filteredPokemons} />
              ) : (
                <Navigation />
              )
            ) : null}
          </div>
        ) : null
      ) : null}

      <main>
        <header>
          <div>
            <h1>
              #{formatNumber(pokemon.id)} - {pokemon.name}{" "}
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
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
                padding: "2rem 8rem",
              }}
            >
              <Image
                src={mainImageUrl}
                alt={pokemon.name}
                height={256}
                width={256}
              />
            </S.Card>
            <S.Card>
              <b>Type</b>
              {pokemon.types.map(({ type }, index) => {
                return (
                  <S.Badge
                    key={index + Date.now()}
                    bg={colorsTypeMonsters[type.name]}
                  >
                    {type.name}
                  </S.Badge>
                );
              })}
            </S.Card>
            <div className="height-weight-container">
              <S.Card style={{ gap: "0" }}>
                <b>Height: </b> {feets > 0 ? feets : -feets}
                &apos;{inches > 0 ? inches : -inches}&apos;&apos; /{" "}
                {pokemon.height ? pokemon.height / 10 : "0"} m
              </S.Card>
              <S.Card style={{ gap: "0" }}>
                <b>Weight: </b> {((pokemon.weight / 10) * 2.205).toFixed(1)}lbs.
                / {pokemon.weight ? pokemon.weight / 10 : "0"}kg
              </S.Card>
            </div>
            <S.Card
              style={{
                flexDirection: "column",
              }}
            >
              <b>Attributes</b>
              <div className="attributes-container">
                <S.Badge bg="#ff5958">{pokemon.stats[0].base_stat} Hp</S.Badge>
                <S.Badge bg="#ff76a2">
                  {pokemon.stats[5].base_stat} Speed
                </S.Badge>
                <S.Badge bg="#ff9a58">{pokemon.stats[1].base_stat} Atk</S.Badge>
                <S.Badge bg="#ffca00">{pokemon.stats[2].base_stat} Def</S.Badge>
                <S.Badge bg="#006dea">
                  {pokemon.stats[3].base_stat} Sp. Atk.
                </S.Badge>
                <S.Badge bg="#4cc752">
                  {pokemon.stats[4].base_stat} Sp. Def.
                </S.Badge>
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
            </S.Card>
          </div>
        </S.Content>
      </main>
    </S.Container>
  );
};

export { DashboardPage };
