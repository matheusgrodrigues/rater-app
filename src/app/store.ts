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

type HomeStore = {
    movieHighlightDetail: MovieDetailSchema | undefined;
    movieHighlightsToo: MovieResponseSchema | undefined;
    movieRecommended: MovieResponseSchema | undefined;
    movieLatestRelease: MovieResponseSchema | undefined;
    celebrities: ActorResponseSchema | undefined;

    setMovieHighlightDetail: (movieHighlightDetail: MovieDetailSchema) => void;
    setMovieLatestRelease: (movieLatestRelease: MovieResponseSchema) => void;
    setMovieHighlighsToo: (movieHighlightsToo: MovieResponseSchema) => void;
    setMovieRecommended: (movieRecommended: MovieResponseSchema) => void;
    setCelebrities: (celebrities: ActorResponseSchema) => void;
};

interface RatterStoreProps extends HomeStore {
    movieDetailSimilar: MovieResponseSchema | undefined;
    movieDetailCast: MovieDetailCast | undefined;
    filteredMovies: MovieSchema[] | undefined;
    movieDetail: MovieDetailSchema | undefined;
    actors: ActorResponseSchema | undefined;

    cacheCastMovie: CacheMovieState[] | [];
    cacheMovies: MovieCacheSchema[] | [];

    setMovieDetailSimilar: (movieDetailSimilar: MovieResponseSchema) => void;
    setMovieDetailCast: (movieDetailCast: MovieDetailCast) => void;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;

    setCacheCastMovie: (cacheCastMovie: CacheMovieState[]) => void;
    setCacheMovies: (cacheMovies: MovieCacheSchema[]) => void;
    setActor: (actors: ActorResponseSchema) => void;
}

const useRatterStore = create<RatterStoreProps>((set) => ({
    movieHighlightDetail: undefined,
    movieHighlightsToo: undefined,
    movieRecommended: undefined,
    movieLatestRelease: undefined,
    celebrities: undefined,

    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
    setMovieHighlighsToo: (movieHighlightsToo) => set({ movieHighlightsToo }),
    setMovieRecommended: (movieRecommended) => set({ movieRecommended }),
    setMovieLatestRelease: (movieLatestRelease) => set({ movieLatestRelease }),
    setCelebrities: (celebrities) => set({ celebrities }),

    movieDetailSimilar: undefined,
    movieDetailCast: undefined,
    filteredMovies: undefined,
    movieDetail: undefined,
    actors: undefined,

    cacheCastMovie: [],
    cacheMovies: [],

    setMovieDetailSimilar: (movieDetailSimilar) => set({ movieDetailSimilar }),
    setMovieDetailCast: (movieDetailCast) => set({ movieDetailCast }),
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
    setMovieDetail: (movieDetail) => set({ movieDetail }),
    setCacheMovies: (cacheMovies) => set({ cacheMovies }),
    setActor: (actors) => set({ actors }),

    setCacheCastMovie: (cacheCastMovie) => set({ cacheCastMovie }),
}));

export default useRatterStore;
