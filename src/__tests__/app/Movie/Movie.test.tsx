import { act, render, screen } from '../../../core/utils/test-utils/testing-library';
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router';
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

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Movie />,
        loader: () => ({
            highlightMovies: Promise.resolve({ results: [] }),
            highlightMovieDetail: Promise.resolve({ results: [] }),
            latestReleases: Promise.resolve({ results: [] }),
            recommended: Promise.resolve({ results: [] }),
            actors: Promise.resolve({ results: [] }),
        }),
    },
];

describe('Deve renderizar a Pagina do Filme corretamente', () => {
    beforeEach(async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ results: [] }));
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        await act(async () => render(<RouterProvider router={router} />));
    });

    it('Dever renderizar a seção trailer', () => {
        const section = screen.getByTestId('section-trailer');

        expect(section).toBeInTheDocument();
    });

    it('Dever renderizar a seção trailer', () => {
        const section = screen.getByTestId('section-category');

        expect(section).toBeInTheDocument();
    });
});
