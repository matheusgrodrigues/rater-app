import useRatterStore from '../store';
import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';
import MovieService from '../../services/MovieService';

export interface LoaderMovieData {
    movieDetailSimilar: Promise<MovieResponseSchema>;
    movieDetail: Promise<MovieDetailSchema>;
}

export const movieDetailLoader = async (movie_id: number) => {
    const { movieDetail, setMovieDetail } = useRatterStore.getState();

    const getMovieFromCache = movieDetail.filter((movie) => movie.id === movie_id);

    if (getMovieFromCache.length > 0) {
        return getMovieFromCache[0];
    } else {
        const data = await MovieService.getById(movie_id);
        setMovieDetail([...movieDetail, data]);
        return data;
    }
};

export const movieDetailSimilarLoader = async (movie_id: number) => {
    const { movieDetailSimilar, movieDetail, setMovieDetailSimilar } = useRatterStore.getState();

    /*
    // TODO: criar um estado global neste formato para salvar os filmes similares, para evitar buscas desnecessarias.
    // Depois, criar as validações de busca e armazenamento. 
    // Após concluido, remover os comentários.
    // 

        cacheMovieSimilar: [{
            movie_id: number;
            similar: MovieCacheSchema[]
        }]

    */

    if (movieDetailSimilar && movieDetail) {
        return movieDetailSimilar;
    } else {
        const data = await MovieService.getSimilarByMovieId(movie_id);
        setMovieDetailSimilar(data);
        return data;
    }
};
