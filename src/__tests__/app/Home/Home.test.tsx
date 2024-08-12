import Home from '../../../app/Home';
import { render, screen } from '../../../core/utils/test-utils/testing-library';

interface SwiperMockProps {
    children: React.ReactNode;
}
jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div>{children}</div>,
}));

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
