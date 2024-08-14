import { create } from 'zustand';

import { MovieResponseSchema } from '../schemas/MovieSchema';

// TODO: ler a doc para ver como centralizar todos os varios estados globais em apenas um para facilitar a manutenção e evitar renderizações desnecessarias.
interface MovieHighlightStore {
    movies: MovieResponseSchema | null;
    setMovies: (movies: MovieResponseSchema) => void;
}

const useHighlightMovieStore = create<MovieHighlightStore>((set) => ({
    movies: null,
    setMovies: (movies) => set({ movies }),
}));

export default useHighlightMovieStore;
