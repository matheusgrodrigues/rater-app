import Home from '../../../app/Home';
import { render, screen } from '../../../core/utils/test-utils/testing-library';

describe('Deve renderizar a Home corretamente', () => {
    beforeEach(() => render(<Home />));

    describe('Deve renderizar a seção Destaques, corretamente', () => {
        it('Deve renderizar a seção Destaques', () => {
            const sectionDestaques = screen.getByTestId('section-destaques');
            expect(sectionDestaques).toBeInTheDocument();
        });

        it('Deve renderizar o CardFilmeDestaque', () => {
            const cardDestaque = screen.getByTestId('card-filme-destaque');
            expect(cardDestaque).toBeInTheDocument();
        });

        it('Deve renderizar o Carrousel Destaques Tambem', () => {
            const carrouselDestaquesTambem = screen.getByTestId('carrousel-movie');
            expect(carrouselDestaquesTambem).toBeInTheDocument();
        });
    });
});
