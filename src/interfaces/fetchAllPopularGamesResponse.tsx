// Generated by https://quicktype.io

export interface FetchAllPopularGamesResponse {
    count:                number;
    next:                 string;
    previous:             null;
    results:              Juegos[];

}

export interface Juegos {
    id:                 number;
    name:               string;
    background_image:   string;
}