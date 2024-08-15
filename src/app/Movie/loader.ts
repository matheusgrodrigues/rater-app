import useRatterStore from '../store';

import { MovieDetailSchema } from '../../schemas/MovieSchema';

import MovieService from '../../services/MovieService';

export interface LoaderMovieData {
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
