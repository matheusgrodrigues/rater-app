import { create } from 'zustand';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

// TODO: ler a doc para ver como centralizar todos os varios estados globais em apenas um.
interface recommendedStore {
    recommended: MovieResponseSchema | null;
    setRecommended: (movies: MovieResponseSchema) => void;
}

export const useRecommendedStore = create<recommendedStore>((set) => ({
    recommended: null,
    setRecommended: (recommended) => set({ recommended }),
}));

interface latestReleaseStore {
    latestRelease: MovieResponseSchema | null;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
}

export const useLatestReleaseStore = create<latestReleaseStore>((set) => ({
    latestRelease: null,
    setLatestRelease: (latestRelease) => set({ latestRelease }),
}));

interface MovieHighlightDetailStore {
    movieHighlightDetail: MovieDetailSchema | null;
    setMovieHighlightDetail: (movies: MovieDetailSchema) => void;
}

export const useMovieHightlightDetailStore = create<MovieHighlightDetailStore>((set) => ({
    movieHighlightDetail: null,
    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
}));

interface MovieDetailStore {
    movieDetail: MovieDetailSchema | null;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
}

export const useMovieDetailStore = create<MovieDetailStore>((set) => ({
    movieDetail: null,
    setMovieDetail: (movieDetail) => set({ movieDetail }),
}));

interface MovieHighlightStore {
    movies: MovieResponseSchema | null;
    setMovies: (movies: MovieResponseSchema) => void;
}

export const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: null,
    setMovies: (movies) => set({ movies }),
}));
