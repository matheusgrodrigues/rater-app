import { MovieDetailGenre } from '../../schemas/MovieSchema';

export const formatVoteAverage = (vote?: string) => {
    let result = '';

    if (vote) {
        result = vote.slice(0, 3);
    }

    return result;
};

export const formatPopularity = (popularity?: number) => {
    let result = '';

    if (popularity) {
        const formatPopularity = popularity.toLocaleString('pt-BR', { maximumSignificantDigits: 3 }).split('.')[0];
        result = `${formatPopularity} mil`;
    }

    return result;
};

export const formatReleaseDate = (release_date?: string) => {
    let result = '';

    if (release_date) {
        result = release_date.split('-')[0];
    }

    return result;
};

export const formatGenre = (genres?: MovieDetailGenre[]) => {
    let result = '';

    if (genres && genres.length > 0) {
        const getGenreName = genres.map((genre) => genre.name);

        result = getGenreName.join(', ');
    }

    return result;
};

export const formatRuntime = (runtime?: number) => {
    let result = '';

    if (runtime) {
        const hours = Math.floor(runtime / 60);
        const mins = runtime % 60;

        result = `${hours}h ${mins}m`;
    }

    return result;
};

export const formatYear = (year?: string) => {
    let result = '';

    if (year) {
        result = year.split('-')[0];
    }

    return result;
};
