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
    const { movieHighlightDetail, cacheMovies, setCacheMovies, setMovieHighlightDetail } = useRatterStore.getState();

    try {
        const highlightMovies = await highlightMovieLoader();

        const getId = Array.isArray(highlightMovies)
            ? (highlightMovies as unknown as MovieDetailSchema).id
            : highlightMovies.results[0].id;

        const data = await MovieService.getById(getId);

        if (movieHighlightDetail) {
            return movieHighlightDetail;
        } else {
            setStoreCacheMovie({ cacheMovies, setCacheMovies }, data as MovieCacheSchema);
            setMovieHighlightDetail(data);
            return data;
        }
    } catch {}
};

export const highlightMovieLoader = async () => {
    const { movieHighlightsToo, setMovieHighlighsToo } = useRatterStore.getState();

    if (movieHighlightsToo) {
        return movieHighlightsToo;
    } else {
        const data = await MovieService.getHighlights();
        setMovieHighlighsToo(data);
        return data;
    }
    /*   const { cacheMovies, setCacheMovies, } = useRatterStore.getState();

    console.log('highlightMovie', )

    if (cacheMovies.length > 0) {
        return cacheMovies as unknown as MovieResponseSchema;
    } else {
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        return data;
    } */
};

export const latestReleasesLoader = async () => {
    const { movieLatestRelease, setMovieLatestRelease, cacheMovies, setCacheMovies } = useRatterStore.getState();

    if (movieLatestRelease) {
        return movieLatestRelease;
    } else {
        const data = await MovieService.getLastReleases();
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        setMovieLatestRelease(data);
        return data;
    }
};

export const recommendedLoader = async () => {
    const { movieRecommended, setMovieRecommended, cacheMovies, setCacheMovies } = useRatterStore.getState();

    if (movieRecommended) {
        return movieRecommended;
    } else {
        const data = await MovieService.getLastReleases();
        setCacheMovies([...cacheMovies, ...data.results] as unknown as MovieCacheSchema[]);
        setMovieRecommended(data);
        return data;
    }
};
