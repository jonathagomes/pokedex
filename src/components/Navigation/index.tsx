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

const limit = 50;

const Navigation = () => {
  const router = useRouter();
  const { pokemon_name } = router.query;
  const [numberPage, setNumberPage] = useState(1);
  const [limitPage, setLimitPage] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);

  // const pokemonId = pokemon_id ? +pokemon_id : undefined;

  const handlePreviousPokemons = () => {
    setNumberPage(numberPage - 1);
    getAllPokemons((numberPage - 2) * limit);
  };

  const handleNextPokemons = () => {
    setNumberPage(numberPage + 1);
    getAllPokemons(numberPage * limit);
  };

  const getAllPokemons = useCallback(async (offset = 0) => {
    const variables = { offset, limit };
    const { pokemons: data } = await client.request(
      GET_ALL_POKEMONS,
      variables,
    );

    setLimitPage(data.count / limit);
    setPokemons(data.results);
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  return (
    <S.Nav id="pokemons-list">
      <ul>
        {pokemons.map((pokemon) => {
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
      </ul>
    </S.Nav>
  );
};

export { Navigation };
