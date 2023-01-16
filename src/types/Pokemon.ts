type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

// ghost: "#472b53",
//   steel: "#454545",
//   fire: "#fc0c0b",
//   water: "#08517a",
//   grass: "#204000",
//   electric: "#969101",
//   psychic: "#8a0532",
//   ice: "#103d43",
//   dragon: "#29036a",
//   dark: "#2d221c",
//   fairy: "#f87ea7",
//   unknown: "#3e3a39",
//   shadow: "#5a5c8c",
type Type = {
  type: {
    name:
      | "normal"
      | "fighting"
      | "flying"
      | "poison"
      | "ground"
      | "rock"
      | "bug"
      | "ghost"
      | "steel"
      | "fire"
      | "water"
      | "grass"
      | "electric"
      | "ice"
      | "dragon"
      | "dark"
      | "fairy"
      | "unknown"
      | "shadow";
  };
};

export type Pokemon = {
  id: number;
  height: number;
  weight: number;
  name: string;
  stats: Stat[];
  sprites: {
    front_default: string;
  };
  types: Type[];
};
