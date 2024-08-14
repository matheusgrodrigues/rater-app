import Middleware from '../core/middleware';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

const MovieService = {
    getHighlights: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            method: 'GET',
            url: `${process.env.REACT_APP_TMDB_API_URL}/movie/popular?language=pt-US&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getById: async (movie_id: number): Promise<MovieDetailSchema> => {
        const req = await Middleware.request({
            method: 'GET',
            url: `${process.env.REACT_APP_TMDB_API_URL}/movie/${movie_id}?language=pt-US&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getLastReleases: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            method: 'GET',
            url: `${process.env.REACT_APP_TMDB_API_URL}/movie/now_playing?language=pt-US&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
};

export default MovieService;
