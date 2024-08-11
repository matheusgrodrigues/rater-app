import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CardFilmeDestaque from '../../../components/organisms/CardFilmeDestaque';

describe('Deve renderizar o CardFilmeDestaque, corretamente', () => {
    beforeEach(() => render(<CardFilmeDestaque data-testid="card-filme-destaque" />));

    it('Deve renderizar o CardFilmeDestaque', () => {
        const card = screen.getByTestId('card-filme-destaque');
        expect(card).toBeInTheDocument();
    });

    it('Deve renderizar o Badge', () => {
        const badge = screen.getByTestId('card-filme-destaque-badge');
        expect(badge).toBeInTheDocument();
    });

    it('Deve renderizar o Title', () => {
        const title = screen.getByTestId('card-filme-destaque-title');
        expect(title).toBeInTheDocument();
    });

    describe('Deve renderizar as especificações corretamente', () => {
        it('Deve renderizar a especificação', () => {
            const spec = screen.getByTestId('card-filme-destaque-spec');
            expect(spec).toBeInTheDocument();
        });

        it('Deve renderizar o Rating, View', () => {
            const spec = screen.getByTestId('card-filme-destaque-spec-rating-view');
            expect(spec).toBeInTheDocument();
        });

        it('Deve renderizar o Duration, Category, Year', () => {
            const spec = screen.getByTestId('card-filme-destaque-spec-durat-cat-year');
            expect(spec).toBeInTheDocument();
        });
    });

    it('Deve renderizar a Sinopse', () => {
        const sinopse = screen.getByTestId('card-filme-destaque-sinopse');
        expect(sinopse).toBeInTheDocument();
    });
});
