import { create } from 'zustand';

import { MovieDetailSchema, MovieResponseSchema, MovieSchema } from '../schemas/MovieSchema';
import { ActorResponseSchema } from '../schemas/ActorSchema';

interface RatterStoreProps {
    movieHighlightDetail: MovieDetailSchema | undefined;
    hightlightMovies: MovieResponseSchema | undefined;
    filteredMovies: MovieSchema[] | undefined;
    latestRelease: MovieResponseSchema | undefined;
    recommended: MovieResponseSchema | undefined;
    movieDetail: MovieDetailSchema | undefined;
    actors: ActorResponseSchema | undefined;

    setMovieHighlightDetail: (movies: MovieDetailSchema) => void;
    setHighlightMovies: (hightlightMovies: MovieResponseSchema) => void;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
    setRecommended: (movies: MovieResponseSchema) => void;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
    setActor: (actor: ActorResponseSchema) => void;
}

const useRatterStore = create<RatterStoreProps>((set) => ({
    movieHighlightDetail: undefined,
    hightlightMovies: undefined,
    filteredMovies: undefined,
    latestRelease: undefined,
    recommended: undefined,
    movieDetail: undefined,
    actors: undefined,

    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
    setHighlightMovies: (hightlightMovies) => set({ hightlightMovies }),
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
    setLatestRelease: (latestRelease) => set({ latestRelease }),
    setRecommended: (recommended) => set({ recommended }),
    setMovieDetail: (movieDetail) => set({ movieDetail }),
    setActor: (actors) => set({ actors }),
}));

export default useRatterStore;

interface MovieHighlightStore {
    movies: MovieResponseSchema | undefined;
    setMovies: (movies: MovieResponseSchema) => void;
}

export const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: undefined,
    setMovies: (movies) => set({ movies }),
}));

interface MovieDetailStore {
    movieDetail: MovieDetailSchema | undefined;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
}

export const useMovieDetailStore = create<MovieDetailStore>((set) => ({
    movieDetail: undefined,
    setMovieDetail: (movieDetail) => set({ movieDetail }),
}));

interface MovieHighlightDetailStore {
    movieHighlightDetail: MovieDetailSchema | undefined;
    setMovieHighlightDetail: (movies: MovieDetailSchema) => void;
}

export const useMovieHightlightDetailStore = create<MovieHighlightDetailStore>((set) => ({
    movieHighlightDetail: undefined,
    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
}));

interface LatestReleaseStore {
    latestRelease: MovieResponseSchema | undefined;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
}

export const useLatestReleaseStore = create<LatestReleaseStore>((set) => ({
    latestRelease: undefined,
    setLatestRelease: (latestRelease) => set({ latestRelease }),
}));

interface RecommendedStore {
    recommended: MovieResponseSchema | undefined;
    setRecommended: (movies: MovieResponseSchema) => void;
}

export const useRecommendedStore = create<RecommendedStore>((set) => ({
    recommended: undefined,
    setRecommended: (recommended) => set({ recommended }),
}));

interface ActorsStore {
    actors: ActorResponseSchema | undefined;
    setActor: (actor: ActorResponseSchema) => void;
}

export const useActorsStore = create<ActorsStore>((set) => ({
    actors: undefined,
    setActor: (actors) => set({ actors }),
}));

interface FilteredMovieStore {
    filteredMovies: MovieSchema[] | undefined;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
}

export const useFilteredMovieStore = create<FilteredMovieStore>((set) => ({
    filteredMovies: undefined,
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
}));
