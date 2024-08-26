import { create, StateCreator } from 'zustand';

import { MovieResponseSchema, MovieDetailSchema, MovieDetailCast, MovieSchema } from '../schemas/MovieSchema';
import { ActorResponseSchema } from '../schemas/ActorSchema';

interface HomeSlice {
    movieHighlightDetail: MovieDetailSchema | undefined;
    moviesHighlightsToo: MovieResponseSchema | undefined;
    moviesRecommended: MovieResponseSchema | undefined;
    moviesLatestRelease: MovieResponseSchema | undefined;
    celebrities: ActorResponseSchema | undefined;
    setMovieHighlightDetail: (movieHighlightDetail: MovieDetailSchema) => void;
    setMoviesLatestRelease: (moviesLatestRelease: MovieResponseSchema) => void;
    setMoviesHighlighsToo: (moviesHighlightsToo: MovieResponseSchema) => void;
    setMoviesRecommended: (moviesRecommended: MovieResponseSchema) => void;
    setCelebrities: (celebrities: ActorResponseSchema) => void;
}

const createHomeSlice: StateCreator<HomeSlice, []> = (set) => ({
    movieHighlightDetail: undefined,
    moviesHighlightsToo: undefined,
    moviesRecommended: undefined,
    moviesLatestRelease: undefined,
    celebrities: undefined,
    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
    setMoviesHighlighsToo: (moviesHighlightsToo) => set({ moviesHighlightsToo }),
    setMoviesRecommended: (moviesRecommended) => set({ moviesRecommended }),
    setMoviesLatestRelease: (moviesLatestRelease) => set({ moviesLatestRelease }),
    setCelebrities: (celebrities) => set({ celebrities }),
});

interface MovieSlice {
    movieDetailSimilar: MovieResponseSchema | undefined;
    movieDetailCast: MovieDetailCast | undefined;
    movieDetail: MovieDetailSchema[];
    actors: ActorResponseSchema | undefined;
    setMovieDetailSimilar: (movieDetailSimilar: MovieResponseSchema) => void;
    setMovieDetailCast: (movieDetailCast: MovieDetailCast) => void;
    setMovieDetail: (movieDetail: MovieDetailSchema[]) => void;
    setActor: (actors: ActorResponseSchema) => void;
}

const createMovieSlice: StateCreator<MovieSlice, []> = (set) => ({
    movieDetailSimilar: undefined,
    movieDetailCast: undefined,
    movieDetail: [],
    actors: undefined,
    setMovieDetailSimilar: (movieDetailSimilar) => set({ movieDetailSimilar }),
    setMovieDetailCast: (movieDetailCast) => set({ movieDetailCast }),
    setMovieDetail: (movieDetail) => set({ movieDetail }),
    setActor: (actors) => set({ actors }),
});

interface GlobalSlice {
    filteredMovies: MovieSchema[] | undefined;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
}

const createGlobalSlice: StateCreator<GlobalSlice, []> = (set) => ({
    filteredMovies: undefined,
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
});

const useRatterStore = create<HomeSlice & MovieSlice & GlobalSlice>()((...a) => ({
    ...createHomeSlice(...a),
    ...createMovieSlice(...a),
    ...createGlobalSlice(...a),
}));

export default useRatterStore;
