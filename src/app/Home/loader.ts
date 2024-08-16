import useRatterStore from '../store';

import MovieService from '../../services/MovieService';

import { MovieCacheSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

export interface LoaderHomeData {
    highlightMovies: Promise<MovieResponseSchema>;
    latestReleases: Promise<MovieResponseSchema>;
    recommended: Promise<MovieResponseSchema>;
}

export const highlightMovieLoader = async () => {
    const { cacheMovies, setCacheMovies } = useRatterStore.getState();

    if (cacheMovies.length > 0) {
        return cacheMovies as unknown as MovieResponseSchema;
    } else {
        const data = await MovieService.getHighlights();
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        return data;
    }
};

export const latestReleasesLoader = async () => {
    const { latestRelease, setLatestRelease, cacheMovies, setCacheMovies } = useRatterStore.getState();

    if (latestRelease) {
        return latestRelease;
    } else {
        const data = await MovieService.getLastReleases();
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        setLatestRelease(data);
        return data;
    }
};

export const recommendedLoader = async () => {
    const { recommended, setRecommended, cacheMovies, setCacheMovies } = useRatterStore.getState();

    if (recommended) {
        return recommended;
    } else {
        const data = await MovieService.getLastReleases();
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        setRecommended(data);
        return data;
    }
};
