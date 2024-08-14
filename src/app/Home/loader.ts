import useHighlightMovieStore, { useMovieHightlightDetailStore } from '../store';
import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';
import MovieService from '../../services/MovieService';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
    highlightMovieDetail: Promise<MovieDetailSchema>;
    movieDetail: Promise<MovieDetailSchema>;
    latestReleases: Promise<MovieResponseSchema>;
}

export const highlightMovieLoader = async () => {
    const { movies, setMovies } = useHighlightMovieStore.getState();

    if (movies) {
        return movies;
    } else {
        const data = await MovieService.getHighlights();
        setMovies(data);

        return data;
    }
};

export const highlightMovieDetailLoader = async () => {
    const { movieHighlightDetail, setMovieHighlightDetail } = useMovieHightlightDetailStore.getState();

    try {
        const highlightMovies = await highlightMovieLoader();

        const data = await MovieService.getById(highlightMovies.results[0].id);

        if (movieHighlightDetail) {
            return movieHighlightDetail;
        } else {
            setMovieHighlightDetail(data);

            return data;
        }
    } catch {}
};

export const latestReleasesLoader = async () => {
    const { movies, setMovies } = useHighlightMovieStore.getState();

    if (movies) {
        return movies;
    } else {
        const data = await MovieService.getLastReleases();
        setMovies(data);

        return data;
    }
};
