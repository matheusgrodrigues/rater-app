import { render, screen } from '../../../core/utils/test-utils/testing-library';
import Movie from '../../../app/Movie';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div>{children}</div>,
    useSwiper: jest.fn(),
}));

describe('Deve renderizar a Pagina do Filme corretamente', () => {
    beforeEach(() => {
        render(<Movie />);
    });

    it('Dever renderizar a seção trailer', () => {
        const section = screen.getByTestId('section-trailer');

        expect(section).toBeInTheDocument();
    });
});
