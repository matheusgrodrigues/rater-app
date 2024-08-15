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

    if (movieDetail && movieDetail.id === movie_id) {
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
