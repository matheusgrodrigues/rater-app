import useHighlightMovieStore from '../store';
import { MovieResponseSchema } from '../../schemas/MovieSchema';
import MovieService from '../../services/MovieService';

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
