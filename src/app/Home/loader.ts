import useRatterStore from '../store';
import MovieService from '../../services/MovieService';
import { MovieCacheSchema, MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';
import { setStoreCacheMovie } from '../lib/cache';

export interface LoaderHomeData {
    hightlightMovieDetail: Promise<MovieDetailSchema | undefined>;
    highlightMovies: Promise<MovieResponseSchema>;
    latestReleases: Promise<MovieResponseSchema>;
    recommended: Promise<MovieResponseSchema>;
}

export const highlightMovieDetailLoader = async () => {
    const { hightlightMovieDetail, cacheMovies, setCacheMovies, setHighlightMovieDetail } = useRatterStore.getState();

    try {
        const highlightMovies = await highlightMovieLoader();

        const getId = Array.isArray(highlightMovies)
            ? (highlightMovies as unknown as MovieDetailSchema).id
            : highlightMovies.results[0].id;

        const data = await MovieService.getById(getId);

        if (hightlightMovieDetail) {
            return hightlightMovieDetail;
        } else {
            setStoreCacheMovie({ cacheMovies, setCacheMovies }, data as MovieCacheSchema);
            setHighlightMovieDetail(data);
            return data;
        }
    } catch {}
};

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
