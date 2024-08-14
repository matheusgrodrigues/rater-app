import { create } from 'zustand';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';
import { ActorResponseSchema } from '../schemas/ActorSchema';

// TODO: ler a doc para ver como centralizar todos os varios estados globais em apenas um.
interface ActorStore {
    actor: ActorResponseSchema | undefined;
    setActor: (actor: ActorResponseSchema) => void;
}

export const useActorStore = create<ActorStore>((set) => ({
    actor: undefined,
    setActor: (actor) => set({ actor }),
}));

interface RecommendedStore {
    recommended: MovieResponseSchema | undefined;
    setRecommended: (movies: MovieResponseSchema) => void;
}

export const useRecommendedStore = create<RecommendedStore>((set) => ({
    recommended: undefined,
    setRecommended: (recommended) => set({ recommended }),
}));

interface LatestReleaseStore {
    latestRelease: MovieResponseSchema | undefined;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
}

export const useLatestReleaseStore = create<LatestReleaseStore>((set) => ({
    latestRelease: undefined,
    setLatestRelease: (latestRelease) => set({ latestRelease }),
}));

interface MovieHighlightDetailStore {
    movieHighlightDetail: MovieDetailSchema | undefined;
    setMovieHighlightDetail: (movies: MovieDetailSchema) => void;
}

export const useMovieHightlightDetailStore = create<MovieHighlightDetailStore>((set) => ({
    movieHighlightDetail: undefined,
    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
}));

interface MovieDetailStore {
    movieDetail: MovieDetailSchema | undefined;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
}

export const useMovieDetailStore = create<MovieDetailStore>((set) => ({
    movieDetail: undefined,
    setMovieDetail: (movieDetail) => set({ movieDetail }),
}));

interface MovieHighlightStore {
    movies: MovieResponseSchema | undefined;
    setMovies: (movies: MovieResponseSchema) => void;
}

export const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: undefined,
    setMovies: (movies) => set({ movies }),
}));
