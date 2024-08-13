import MovieService from '../../services/MovieService';

import { MovieResponseSchema } from '../../schemas/MovieSchema';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
}

export const movieHighlightLoader = async () => await MovieService.getHighlightMovies();
