import Middleware from '../core/middleware';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

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
            url: `${api_url}/movie/${movie_id}?language=pt-BR&page=1`,
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
};

export default MovieService;
