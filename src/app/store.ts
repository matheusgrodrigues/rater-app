import { create } from 'zustand';

import { MovieResponseSchema } from '../schemas/MovieSchema';

interface MovieHighlightStore {
    movies: MovieResponseSchema | null;
    setMovies: (movies: MovieResponseSchema) => void;
}

const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: null,
    setMovies: (movies) => set({ movies }),
}));

export default useHighlightMovieStore;
