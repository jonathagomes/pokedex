import type { GetServerSideProps, NextPage } from "next";
import type { Pokemon } from "types/Pokemon";
import client from "graphql/client";
import { parseCookies } from "nookies";

import { DashboardPage } from "layout/Dashboard";

import GET_SPECIFIC_POKEMON from "graphql/queries/getSpecificPokemon";

type Props = {
  pokemon: Pokemon;
};

const Details: NextPage<Props> = ({ pokemon }) => {
  return <DashboardPage pokemon={pokemon} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["riderize.pokedex.email"]: email } = parseCookies(ctx);
  const { pokemon_name } = ctx.query;

  const variables = { name: pokemon_name };
  const { pokemon: data } = await client.request(
    GET_SPECIFIC_POKEMON,
    variables,
  );

  console.log(data);

  if (!email) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon: data,
    },
  };
};

export default Details;
