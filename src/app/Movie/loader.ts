import useRatterStore from '../store';

import { MovieDetailCast, MovieDetailSchema } from '../../schemas/MovieSchema';

import MovieService from '../../services/MovieService';

export interface LoaderMovieData {
    movieDetail: Promise<MovieDetailSchema>;
    movieDetailCast: Promise<MovieDetailCast>;
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
    const { movieDetailCast, setMovieDetailCast } = useRatterStore.getState();

    if (movieDetailCast) {
        return movieDetailCast;
    } else {
        const data = await MovieService.getCastByMovieId(movie_id);

        setMovieDetailCast(data);

        return data;
    }
};
