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
    });
});
