import Home from '../../../app/Home';
import { render, screen } from '../../../core/utils/test-utils/testing-library';

interface SwiperMockProps {
    children: React.ReactNode;
}
jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-highlights-too">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div>{children}</div>,
}));

describe('Deve renderizar a Home corretamente', () => {
    beforeEach(() => render(<Home />));

    describe('Deve renderizar a seção Destaques, corretamente', () => {
        it('Deve renderizar o titulo', () => {
            const title = screen.getByTestId('title-highlighs-too');
            expect(title).toBeInTheDocument();
        });

        it('Deve renderizar a seção Destaques', () => {
            const sectionDestaques = screen.getByTestId('section-highlight');
            expect(sectionDestaques).toBeInTheDocument();
        });

        it('Deve renderizar o CardFilmeDestaque', () => {
            const cardDestaque = screen.getByTestId('card-movie-highlight');
            expect(cardDestaque).toBeInTheDocument();
        });

        it('Deve renderizar o Carrousel Highlights Too', () => {
            const carrouselHighligsToo = screen.getByTestId('carrousel-highlights-too');
            expect(carrouselHighligsToo).toBeInTheDocument();
        });
    });

    describe('Deve renderizar a seção Latest Releases', () => {
        it('Deve renderizar o titulo', () => {
            const title = screen.getByTestId('title-latest-releases');
            expect(title).toBeInTheDocument();
        });
    });
});
