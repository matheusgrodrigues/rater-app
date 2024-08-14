import { useMovieDetailStore } from '../store';

import MovieService from '../../services/MovieService';

export const movieDetailLoader = async (movie_id: number) => {
    const { movieDetail, setMovieDetail } = useMovieDetailStore.getState();

    if (movieDetail) {
        return movieDetail;
    } else {
        const data = await MovieService.getMovieById(movie_id);
        setMovieDetail(data);

        return data;
    }
};
