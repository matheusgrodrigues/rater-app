import MovieService from '../../services/MovieService';
import { MovieResponseSchema } from '../../schemas/MovieSchema';

import useHighlightMovieStore from '../store';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
}

export const movieHighlightLoader = async () => {
    const { movies, setMovies } = useHighlightMovieStore.getState();

    if (movies) {
        return movies;
    } else {
        const data = await MovieService.getHighlightMovies();
        setMovies(data);

        return data;
    }
};
