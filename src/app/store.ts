import { create } from 'zustand';

import {
    MovieDetailCast,
    MovieDetailSchema,
    MovieCacheSchema,
    MovieResponseSchema,
    MovieSchema,
} from '../schemas/MovieSchema';

import { ActorResponseSchema } from '../schemas/ActorSchema';

interface CacheMovieState {
    movie_id: number;
    cast: MovieDetailCast[];
}

interface RatterStoreProps {
    movieDetailSimilar: MovieResponseSchema | undefined;
    hightlightMovies: MovieResponseSchema | undefined;
    movieDetailCast: MovieDetailCast | undefined;
    filteredMovies: MovieSchema[] | undefined;
    latestRelease: MovieResponseSchema | undefined;
    movieDetail: MovieDetailSchema | undefined;
    recommended: MovieResponseSchema | undefined;
    actors: ActorResponseSchema | undefined;

    cacheCastMovie: CacheMovieState[] | [];
    cacheMovies: MovieCacheSchema[] | [];

    setMovieDetailSimilar: (movieDetailSimilar: MovieResponseSchema) => void;
    setHighlightMovies: (hightlightMovies: MovieResponseSchema) => void;
    setMovieDetailCast: (movieDetailCast: MovieDetailCast) => void;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
    setRecommended: (movies: MovieResponseSchema) => void;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
    setActor: (actor: ActorResponseSchema) => void;

    setCacheCastMovie: (cacheCastMovie: CacheMovieState[]) => void;
    setCacheMovies: (cacheMovies: MovieCacheSchema[]) => void;
}

const useRatterStore = create<RatterStoreProps>((set) => ({
    movieDetailSimilar: undefined,
    hightlightMovies: undefined,
    movieDetailCast: undefined,
    filteredMovies: undefined,
    latestRelease: undefined,
    recommended: undefined,
    movieDetail: undefined,
    actors: undefined,

    cacheCastMovie: [],
    cacheMovies: [],

    setMovieDetailSimilar: (movieDetailSimilar) => set({ movieDetailSimilar }),
    setMovieDetailCast: (movieDetailCast) => set({ movieDetailCast }),
    setHighlightMovies: (hightlightMovies) => set({ hightlightMovies }),
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
    setLatestRelease: (latestRelease) => set({ latestRelease }),
    setRecommended: (recommended) => set({ recommended }),
    setMovieDetail: (movieDetail) => set({ movieDetail }),
    setCacheMovies: (cacheMovies) => set({ cacheMovies }),
    setActor: (actors) => set({ actors }),

    setCacheCastMovie: (cacheCastMovie) => set({ cacheCastMovie }),
}));

export default useRatterStore;
