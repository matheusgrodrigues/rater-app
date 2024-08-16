import useRatterStore from '../store';

import { MovieDetailCast, MovieDetailSchema, MovieCacheSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

import MovieService from '../../services/MovieService';

export interface LoaderMovieData {
    movieDetailSimilar: Promise<MovieResponseSchema>;
    movieDetailCast: Promise<MovieDetailCast>;
    movieDetail: Promise<MovieDetailSchema>;
}

export const movieDetailLoader = async (movie_id: number) => {
    const { movieDetail, setMovieDetail, cacheMovies, setCacheMovies } = useRatterStore.getState();

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

    const loadedMovies = () => {
        const result = cacheMovies.filter((movie) => movie.id === movie_id);

        //    cacheMovies.forEach((movie) => console.log(movie));

        //   console.log(result.length > 0);
        return result;
    };

    // console.log('loadedMovies()', loadedMovies(), 'cacheData', cacheMovies);

    if (loadedMovies().length > 0) {
        console.log('exite');

        return loadedMovies()[0] as unknown as MovieDetailSchema;
    } else {
        const data = await MovieService.getById(movie_id);

        console.log('não exite');

        !(loadedMovies().length > 0) && setCacheMovies([...cacheMovies, ...[data]] as unknown as MovieCacheSchema[]);

        //  setMovieDetail(data);

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
