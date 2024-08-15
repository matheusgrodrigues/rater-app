import useRatterStore from '../store';

import { MovieDetailCast, MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

import MovieService from '../../services/MovieService';

export interface LoaderMovieData {
    movieDetailSimilar: Promise<MovieResponseSchema>;
    movieDetailCast: Promise<MovieDetailCast>;
    movieDetail: Promise<MovieDetailSchema>;
}

export const movieDetailLoader = async (movie_id: number) => {
    const { movieDetail, setMovieDetail } = useRatterStore.getState();

    // TODO: esta função verifica em todas as stores se já existe o filme carregado, para não precisar buscar novamente da api.
    // Porém, no inicio eu defini o Schema especifico para MovieDetail, e as outras stores estão utilizando MovieSchema.
    // Precisará comparar para ajustar os tipos e unificar para implementar esta melhoria de performance.
    // * Porém não deu tempo. *

    /*
    const loadedMovies = () => {
        const hightlight = hightlightMovies ? hightlightMovies.results : [];
        const latest = latestRelease ? latestRelease.results : [];
        const filtered = filteredMovies ? filteredMovies : [];

        const concatMovies = filtered.concat(hightlight).concat(latest);

        const result = concatMovies.filter((movie) => movie.id === movie_id);

        return result;
    };

    */

    if (movieDetail && movieDetail.id === movie_id) {
        // Exemplo: if (loadedMovies.length > 0) setMovieDetail(loadedMovies()[0])

        return movieDetail;
    } else {
        const data = await MovieService.getById(movie_id);
        setMovieDetail(data);

        return data;
    }
};

export const movieDetailCastLoader = async (movie_id: number) => {
    const { movieDetailCast, movieDetail, setMovieDetailCast } = useRatterStore.getState();

    if (movieDetailCast && movieDetail && movieDetail.id === movie_id) {
        return movieDetailCast;
    } else {
        const data = await MovieService.getCastByMovieId(movie_id);

        setMovieDetailCast(data);

        return data;
    }
};

export const movieDetailSimilarLoader = async (movie_id: number) => {
    const { movieDetailSimilar, movieDetail, setMovieDetailSimilar } = useRatterStore.getState();

    if (movieDetailSimilar && movieDetail && movieDetail.id === movie_id) {
        return movieDetailSimilar;
    } else {
        const data = await MovieService.getSimilarByMovieId(movie_id);

        setMovieDetailSimilar(data);

        return data;
    }
};
