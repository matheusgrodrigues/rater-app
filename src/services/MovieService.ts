import Middleware from '../core/middleware';

import { MovieResponseSchema } from '../schemas/MovieSchema';

const MovieService = {
    getHighlightMovies: async (): Promise<MovieResponseSchema> => {
        const req = await Middleware.request({
            method: 'GET',
            url: `${process.env.REACT_APP_TMDB_API_URL}/movie/popular?language=pt-US&page=1`,
        });

        const resp = await req.json();

        return resp;
    },
};

export default MovieService;
