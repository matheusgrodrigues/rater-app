import {
    useMovieHightlightDetailStore,
    useHighlightMovieStore,
    useLatestReleaseStore,
    useRecommendedStore,
} from '../store';

import MovieService from '../../services/MovieService';

import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
    highlightMovieDetail: Promise<MovieDetailSchema>;
    latestReleases: Promise<MovieResponseSchema>;
    recommended: Promise<MovieResponseSchema>;
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
    const { latestRelease, setLatestRelease } = useLatestReleaseStore.getState();

    if (latestRelease) {
        return latestRelease;
    } else {
        const data = await MovieService.getLastReleases();

        setLatestRelease(data);

        return data;
    }
};

export const recommendedLoader = async () => {
    const { recommended, setRecommended } = useRecommendedStore.getState();

    if (recommended) {
        return recommended;
    } else {
        const data = await MovieService.getLastReleases();

        setRecommended(data);

        return data;
    }
};
