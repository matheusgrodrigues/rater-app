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
