import { create } from 'zustand';

import { MovieDetailSchema, MovieResponseSchema } from '../schemas/MovieSchema';

// TODO: ler a doc para ver como centralizar todos os varios estados globais em apenas um para facilitar a manutenção e evitar renderizações desnecessarias.

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
    setMovieDetail: (movies: MovieDetailSchema) => void;
}

export const useMovieDetailStore = create<MovieDetailStore>((set) => ({
    movieDetail: null,
    setMovieDetail: (movieDetail) => set({ movieDetail }),
}));

interface MovieHighlightStore {
    movies: MovieResponseSchema | null;
    setMovies: (movies: MovieResponseSchema) => void;
}

const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: null,
    setMovies: (movies) => set({ movies }),
}));

export default useHighlightMovieStore;
