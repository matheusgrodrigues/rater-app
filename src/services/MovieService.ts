import MovieRepository, { MovieRepositoryImp } from '../repository/MovieRepository';

interface MovieServiceImp extends MovieRepositoryImp {}

const MovieService: MovieServiceImp = {
    getSimilarByMovieId: async (movie_id: number) => {
        const result = await MovieRepository.getSimilarByMovieId(movie_id);
        return result;
    },
    getLatestReleases: async () => {
        const result = await MovieRepository.getLatestReleases();
        return result;
    },
    getRecommended: async () => {
        const result = await MovieRepository.getRecommended();
        return result;
    },
    filterByQuery: async (query: string) => {
        const result = await MovieRepository.filterByQuery(query);
        return result;
    },
    getHighlights: async () => {
        const result = await MovieRepository.getHighlights();
        return result;
    },
    getById: async (movie_id: number) => {
        const result = await MovieRepository.getById(movie_id);
        return result;
    },
};

export default MovieService;
