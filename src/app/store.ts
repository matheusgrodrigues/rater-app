import { create } from 'zustand';

import { MovieDetailCast, MovieDetailSchema, MovieResponseSchema, MovieSchema } from '../schemas/MovieSchema';
import { ActorResponseSchema } from '../schemas/ActorSchema';

interface RatterStoreProps {
    movieHighlightDetail: MovieDetailSchema | undefined;
    hightlightMovies: MovieResponseSchema | undefined;
    filteredMovies: MovieSchema[] | undefined;
    latestRelease: MovieResponseSchema | undefined;
    recommended: MovieResponseSchema | undefined;
    actors: ActorResponseSchema | undefined;
    movieDetail: MovieDetailSchema | undefined;
    movieDetailCast: MovieDetailCast | undefined;
    movieDetailSimilar: MovieResponseSchema | undefined;

    setMovieHighlightDetail: (movies: MovieDetailSchema) => void;
    setHighlightMovies: (hightlightMovies: MovieResponseSchema) => void;
    setFilteredMovies: (filteredMovie: MovieSchema[] | undefined) => void;
    setLatestRelease: (latestRelease: MovieResponseSchema) => void;
    setRecommended: (movies: MovieResponseSchema) => void;
    setActor: (actor: ActorResponseSchema) => void;
    setMovieDetail: (movieDetail: MovieDetailSchema) => void;
    setMovieDetailCast: (movieDetailCast: MovieDetailCast) => void;
    setMovieDetailSimilar: (movieDetailSimilar: MovieResponseSchema) => void;
}

const useRatterStore = create<RatterStoreProps>((set) => ({
    movieHighlightDetail: undefined,
    hightlightMovies: undefined,
    filteredMovies: undefined,
    latestRelease: undefined,
    recommended: undefined,
    actors: undefined,
    movieDetail: undefined,
    movieDetailCast: undefined,
    movieDetailSimilar: undefined,

    setMovieHighlightDetail: (movieHighlightDetail) => set({ movieHighlightDetail }),
    setHighlightMovies: (hightlightMovies) => set({ hightlightMovies }),
    setFilteredMovies: (filteredMovies) => set({ filteredMovies }),
    setLatestRelease: (latestRelease) => set({ latestRelease }),
    setRecommended: (recommended) => set({ recommended }),
    setActor: (actors) => set({ actors }),
    setMovieDetail: (movieDetail) => set({ movieDetail }),
    setMovieDetailCast: (movieDetailCast) => set({ movieDetailCast }),
    setMovieDetailSimilar: (movieDetailSimilar) => set({ movieDetailSimilar }),
}));

export default useRatterStore;
