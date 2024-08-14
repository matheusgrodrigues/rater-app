import { MovieDetailGenre } from '../../schemas/MovieSchema';

export const formatVoteAverage = (vote: string) => vote.slice(0, 3);

export const formatPopularity = (popularity: number) => {
    const formatPopularity = popularity.toLocaleString('pt-BR', { maximumSignificantDigits: 3 }).split('.')[0];

    return `${formatPopularity} mil`;
};

export const formatReleaseDate = (release_date: string) => release_date.split('-')[0];

export const formatGenre = (genres: MovieDetailGenre[]) => {
    let result = '';

    if (genres.length > 0) {
        const getGenreName = genres.map((genre) => genre.name);

        result = getGenreName.join(', ');
    }

    return result;
};

export const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;

    return `${hours}h ${mins}m`;
};
