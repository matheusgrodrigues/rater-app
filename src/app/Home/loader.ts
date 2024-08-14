import useRatterStore from '../store';

import MovieService from '../../services/MovieService';

import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
    highlightMovieDetail: Promise<MovieDetailSchema>;
    latestReleases: Promise<MovieResponseSchema>;
    recommended: Promise<MovieResponseSchema>;
}

export const highlightMovieLoader = async () => {
    const { hightlightMovies, setHighlightMovies } = useRatterStore.getState();

    if (hightlightMovies) {
        return hightlightMovies;
    } else {
        const data = await MovieService.getHighlights();
        setHighlightMovies(data);

        return data;
    }
};

export const highlightMovieDetailLoader = async () => {
    const { movieHighlightDetail, setMovieHighlightDetail } = useRatterStore.getState();

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
    const { latestRelease, setLatestRelease } = useRatterStore.getState();

    if (latestRelease) {
        return latestRelease;
    } else {
        const data = await MovieService.getLastReleases();

        setLatestRelease(data);

        return data;
    }
};

export const recommendedLoader = async () => {
    const { recommended, setRecommended } = useRatterStore.getState();

    if (recommended) {
        return recommended;
    } else {
        const data = await MovieService.getLastReleases();

        setRecommended(data);

        return data;
    }
};
