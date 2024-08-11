import CardFilmeDestaque from '../../../components/organisms/CardFilmeDestaque';
import { render, screen } from '../../../core/utils/test-utils/testing-library';

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
});
