export interface FetchJuegoEspecificoResponse {
    id:                          number;
    slug:                        string;
    name:                        string;
    name_original:               string;
    description:                 string;
    released:                    string;
    background_image_additional: string;
    playtime:                    number;
    creators_count:              number;
    achievements_count:          number;
    parent_achievements_count:   number;
    alternative_names:           any[];
    additions_count:             number;
    game_series_count:           number;
    parent_platforms:            ParentPlatform[];
    platforms:                   PlatformElement[];
    developers:                  Developer[];
    genres:                      Developer[];
    tags:                        Developer[];
    publishers:                  Developer[];
    description_raw:             string;
}

export interface Developer {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    domain?:          string;
    language?:        string;
}

export interface ParentPlatform {
    platform: ParentPlatformPlatform;
}

export interface ParentPlatformPlatform {
    id:   number;
    name: string;
    slug: string;
}

export interface PlatformElement {
    platform:     PlatformPlatform;
    released_at:  string;
}

export interface PlatformPlatform {
    id:               number;
    name:             string;
    slug:             string;
    image:            null;
    year_end:         null;
    year_start:       null;
    games_count:      number;
    image_background: string;
}
