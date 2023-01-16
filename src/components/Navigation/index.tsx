import Link from "next/link";
import client from "graphql/client";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import GET_ALL_POKEMONS from "graphql/queries/getAllPokemons";

import { formatNumber } from "utils/formatNumber";

import * as S from "./styles";

type PokemonList = {
  id: number;
  name: string;
};

type Props = {
  pokemonsProps?: PokemonList[];
};

const limit = 50;

const Navigation = ({ pokemonsProps }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { pokemon_name } = router.query;
  const [numberPage, setNumberPage] = useState(1);
  const [limitPage, setLimitPage] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);

  const handlePreviousPokemons = () => {
    setNumberPage(numberPage - 1);
    getAllPokemons((numberPage - 2) * limit);
  };

  const handleNextPokemons = () => {
    setNumberPage(numberPage + 1);
    getAllPokemons(numberPage * limit);
  };

  const getAllPokemons = useCallback(async (offset = 0) => {
    setLoading(true);
    const variables = { offset, limit };
    const { pokemons: data } = await client.request(
      GET_ALL_POKEMONS,
      variables,
    );

    setLimitPage(data.count / limit);
    setPokemons(data.results);
    setLoading(false);
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  if (pokemonsProps?.length == 0) {
    return <h1>Not Found!</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Nav id="pokemons-list">
      <ul>
        {pokemonsProps
          ? pokemonsProps.map((pokemon) => {
              return (
                <li
                  key={pokemon.id}
                  className={pokemon.name == pokemon_name ? "active" : ""}
                >
                  <Link href={`/dashboard/${pokemon.name}`}>
                    #{formatNumber(pokemon.id)}- {pokemon.name}
                  </Link>
                </li>
              );
            })
          : pokemons.map((pokemon) => {
              return (
                <li
                  key={pokemon.id}
                  className={pokemon.name == pokemon_name ? "active" : ""}
                >
                  <Link href={`/dashboard/${pokemon.name}`}>
                    #{formatNumber(pokemon.id)}- {pokemon.name}
                  </Link>
                </li>
              );
            })}
        {!pokemonsProps ? (
          <div className="buttons-container">
            <button
              onClick={() => handlePreviousPokemons()}
              disabled={numberPage <= 1}
            >
              <AiOutlineLeft />
            </button>
            <button>{numberPage}</button>
            <button
              onClick={handleNextPokemons}
              disabled={numberPage >= limitPage}
            >
              <AiOutlineRight />
            </button>
          </div>
        ) : null}
      </ul>
    </S.Nav>
  );
};

export { Navigation };
