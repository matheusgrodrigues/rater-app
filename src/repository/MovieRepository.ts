import Middleware from '../core/middleware';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

export interface MovieRepositoryImp {
    getSimilarByMovieId: (movie_id: number) => Promise<MovieResponseSchema>;
    getLatestReleases: () => Promise<MovieResponseSchema>;
    getRecommended: () => Promise<MovieResponseSchema>;
    filterByQuery: (query: string) => Promise<MovieResponseSchema>;
    getHighlights: () => Promise<MovieResponseSchema>;
    getById: (movie_id: number) => Promise<MovieDetailSchema>;
}

const api_url = process.env.REACT_APP_TMDB_API_URL;

const MovieRepository: MovieRepositoryImp = {
    getSimilarByMovieId: async (movie_id: number) => {
        const req = await Middleware.request({
            url: `${api_url}/movie/${movie_id}/similar?language=pt-BR&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
    getLatestReleases: async () => {
        const req = await Middleware.request({
            url: `${api_url}/trending/movie/week?language=pt-BR&page=1`,
        });
        const resp = await req.json();
        return resp;
    },
    getRecommended: async () => {
        const req = await Middleware.request({
            url: `${api_url}/top_rated?language=pt-BR&page=1`,
        });
        const resp = await req.json();
        return resp;
    },
    filterByQuery: async (query: string) => {
        const req = await Middleware.request({
            url: `${api_url}/search/movie?language=pt-BR&page=1&query=${query}`,
        });
        const resp = await req.json();
        return resp;
    },
    getHighlights: async () => {
        const req = await Middleware.request({
            url: `${api_url}/movie/popular?language=pt-BR&page=1`,
        });
        const resp = await req.json();
        return resp;
    },
    getById: async (movie_id: number) => {
        const req = await Middleware.request({
            url: `${api_url}/movie/${movie_id}?append_to_response=videos,credits,crew&language=pt-BR&page=1`,
        });
        const resp = await req.json();
        return resp;
    },
};

export default MovieRepository;
