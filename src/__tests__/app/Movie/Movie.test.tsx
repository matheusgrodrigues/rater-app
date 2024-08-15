import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { act, render, screen, waitFor } from '../../../core/utils/test-utils/testing-library';
import fetchMock from 'jest-fetch-mock';
import Movie from '../../../app/Movie';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-movie">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div>{children}</div>,
    useSwiper: jest.fn(),
}));

/*
 *
 * TODO: criar testes para os carrousel da pagina, o jest está dando um bug nos moduleNameMapper, e consumindo muito tempo.
 * quando ajustar, remover este comentario.
 *
 */

/*
const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        loader: () => ({
            highlightMovies: Promise.resolve({ results: [] }),
            highlightMovieDetail: Promise.resolve({ results: [] }),
            latestReleases: Promise.resolve({ results: [] }),
            recommended: Promise.resolve({ results: [] }),
            actors: Promise.resolve({ results: [] }),
        }),
    },
]; */

describe('Deve renderizar a Pagina do Filme corretamente', () => {
    beforeEach(async () => {
        render(<Movie />);
    });

    it('Dever renderizar a seção trailer', () => {
        const section = screen.getByTestId('section-trailer');

        expect(section).toBeInTheDocument();
    });
});
