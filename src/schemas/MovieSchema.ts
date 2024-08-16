import { ActorSchema } from './ActorSchema';

export interface MovieSchema {
    adult: false;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieResponseSchema {
    page: number;
    results: MovieSchema[];
    total_pages: number;
    total_results: number;
}

export type MovieDetailGenre = {
    id: number;
    name: string;
};

export interface MovieDetailSchema {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: MovieDetailGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }>;

    production_countries: Array<{
        iso_3166_1: string;
        name: string;
    }>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{
        english_name: string;
        iso_639_1: string;
        name: string;
    }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetailCast {
    id: number;
    cast: Array<ActorSchema>;
}

type UnionMovieSchemas = MovieSchema & MovieDetailSchema;

export interface MovieCacheSchema extends UnionMovieSchemas {}
