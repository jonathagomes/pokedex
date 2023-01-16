const GET_ALL_POKEMONS = /* GraphQL */ `
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      results {
        id
        name
      }
    }
  }
`;

export default GET_ALL_POKEMONS;
