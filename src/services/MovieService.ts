import Middleware from '../core/middleware';

import { MovieDetailCast, MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

const api_url = process.env.REACT_APP_TMDB_API_URL;

const MovieService = {
    getHighlights: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            url: `${api_url}/movie/popular?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getById: async (movie_id: number): Promise<MovieDetailSchema> => {
        const req = await Middleware.request({
            url: `${api_url}/movie/${movie_id}?append_to_response=videos&language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getLastReleases: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            url: `${api_url}/trending/movie/week?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getRecommended: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            url: `${api_url}/top_rated?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    filterByQuery: async (query: string): Promise<MovieResponseSchema> => {
        console.log(`${api_url}/search/movie?language=pt-BR&page=1&${query}`);
        const req = await Middleware.request({
            url: `${api_url}/search/movie?language=pt-BR&page=1&query=${query}`,
        });

        const resp = await req.json();

        return resp;
    },

    getCastByMovieId: async (movie_id: number): Promise<MovieDetailCast> => {
        const req = await Middleware.request({
            url: `${api_url}/movie/${movie_id}/credits?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },

    getSimilarByMovieId: async (movie_id: number): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            url: `${api_url}/movie/${movie_id}/similar?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
};

export default MovieService;
