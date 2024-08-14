export const prepareVoteAverage = (vote: string) => vote.slice(0, 3);

export const preparePopularity = (popularity: number) => {
    const formatPopularity = popularity.toLocaleString('pt-BR', { maximumSignificantDigits: 3 }).split('.')[0];

    return `${formatPopularity}mil`;
};

export const prepareReleaseDate = (release_date: string) => release_date.split('-')[0];
