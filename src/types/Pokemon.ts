type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

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
