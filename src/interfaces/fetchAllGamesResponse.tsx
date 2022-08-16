export interface FetchAllGames {
  count: number;
  next: null;
  previous: null;
  results: Juegos[];
}

export interface Juegos {
  id: number;
  name: string;
  background_image: string;
}

export interface Juego {
  id: number;
  name: string;
  background_image: string;
  released: string;
}
