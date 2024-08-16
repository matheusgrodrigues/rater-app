import useRatterStore from '../store';

import { MovieDetailCast, MovieDetailSchema, MovieCacheSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

import MovieService from '../../services/MovieService';
import { setStoreCacheMovie } from '../lib/cache';

export interface LoaderMovieData {
    movieDetailSimilar: Promise<MovieResponseSchema>;
    movieDetailCast: Promise<MovieDetailCast>;
    movieDetail: Promise<MovieDetailSchema>;
}

export const movieDetailLoader = async (movie_id: number) => {
    const { cacheMovies, setCacheMovies } = useRatterStore.getState();

    const getMovieFromCache = () => cacheMovies.filter((movie) => movie.id === movie_id);

    if (getMovieFromCache().length > 0) {
        return getMovieFromCache()[0] as unknown as MovieDetailSchema;
    } else {
        const data = await MovieService.getById(movie_id);

        if (!(getMovieFromCache().length > 0)) {
            setStoreCacheMovie({ cacheMovies, setCacheMovies }, data as MovieCacheSchema);
        }

        return data;
    }
};

export const movieDetailCastLoader = async (movie_id: number) => {
    const { movieDetailCast, movieDetail, cacheCastMovie, setMovieDetailCast, setCacheCastMovie } =
        useRatterStore.getState();

    /*
    // TODO: criar um estado global neste formato para salvar os casts dos filmes, para evitar buscas desnecessarias.
    // Depois, criar as validações de busca e armazenamento.
    // Após concluido, remover os comentários.
    
        cacheCastMovie: [{
            movie_id: number;
            cast: MovieDetailCast[]
        }]

    */
    const getCastFromCache = () => cacheCastMovie.filter((cast) => cast.movie_id === movie_id);

    // if (getCastFromCache().length > 0) {
    //  return getCastFromCache()[0].cast;

    //}
    //else {
    const data = await MovieService.getCastByMovieId(movie_id);

    //   if (!(getCastFromCache().length > 0)) {
    // TODO: criar metodo para armazenar e gerenciar os cache do cast, e setar aqui o objeto correto
    // {movie_id, cast[]}
    //   setStoreCacheCastMovie({ cacheCastMovie, setCacheCastMovie }, data as MovieDetailCast);
    //  }

    return data;
    //}
};

export const movieDetailSimilarLoader = async (movie_id: number) => {
    const { movieDetailSimilar, movieDetail, cacheMovies, setMovieDetailSimilar, setCacheMovies } =
        useRatterStore.getState();

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

    if (movieDetailSimilar && movieDetail && movieDetail.id === movie_id) {
        return movieDetailSimilar;
    } else {
        const data = await MovieService.getSimilarByMovieId(movie_id);
        setStoreCacheMovie({ cacheMovies, setCacheMovies }, data.results as unknown as MovieCacheSchema[]);
        setMovieDetailSimilar(data);
        return data;
    }
};
