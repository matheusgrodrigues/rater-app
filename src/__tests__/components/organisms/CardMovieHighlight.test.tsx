import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CardMovieHighlight from '../../../components/organisms/CardMovieHighlight';

import movieDetailMock from '../../../__mocks__/movieDetail.mock';

describe('Deve renderizar o CardMovieHighlight, corretamente', () => {
    beforeEach(() => render(<CardMovieHighlight data-testid="card-movie-higlight" highlightMovie={movieDetailMock} />));

    it('Deve renderizar o CardMovieHighlight', () => {
        const card = screen.getByTestId('card-movie-higlight');
        expect(card).toBeInTheDocument();
    });

    it('Deve renderizar o Badge', () => {
        const badge = screen.getAllByTestId('card-movie-higlight-badge');
        expect(badge).not.toHaveLength(0);
    });

    it('Deve renderizar o Title', () => {
        const title = screen.getByTestId('card-movie-higlight-title');
        expect(title).toBeInTheDocument();
    });

    describe('Deve renderizar as especificações corretamente', () => {
        it('Deve renderizar a especificação', () => {
            const spec = screen.getByTestId('card-movie-higlight-spec');
            expect(spec).toBeInTheDocument();
        });

        it('Deve renderizar o Rating, View', () => {
            const spec = screen.getByTestId('card-movie-higlight-spec-rating-view');
            expect(spec).toBeInTheDocument();
        });

        it('Deve renderizar o Duration, Category, Year', () => {
            const spec = screen.getByTestId('card-movie-higlight-spec-durat-cat-year');
            expect(spec).toBeInTheDocument();
        });
    });

    it('Deve renderizar a Sinopse', () => {
        const sinopse = screen.getByTestId('card-movie-higlight-sinopse');
        expect(sinopse).toBeInTheDocument();
    });
});
