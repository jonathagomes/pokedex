const GET_SPECIFIC_POKEMON = /* GraphQL */ `
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      height
      weight
      status
      stats {
        base_stat
        stat {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
export default GET_SPECIFIC_POKEMON;
