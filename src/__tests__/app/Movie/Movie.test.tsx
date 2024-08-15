import { act, render, screen, waitFor } from '../../../core/utils/test-utils/testing-library';
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
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
        path: '/movie:id',
        element: <Movie />,
        loader: () => ({
            highlightMovies: Promise.resolve({ results: [] }),
            highlightMovieDetail: Promise.resolve({ results: [] }),
            actors: Promise.resolve({ results: [] }),
        }),
    },
];

describe('Deve renderizar a Pagina do Filme corretamente', () => {
    beforeEach(async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ results: [] }));
        const router = createMemoryRouter(routes, { initialEntries: ['/movie:id'] });

        await act(async () => render(<RouterProvider router={router} />));
    });

    it('Dever renderizar a seção trailer', async () => {
        await waitFor(() => {
            const section = screen.getByTestId('section-trailer');

            expect(section).toBeInTheDocument();
        });
    });

    it('Dever renderizar a seção category', async () => {
        await waitFor(() => {
            const section = screen.getByTestId('section-category');

            expect(section).toBeInTheDocument();
        });
    });

    describe('Deve renderizar a seção description, corretamente', () => {
        it('Dever renderizar a seção description', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-description');

                expect(section).toBeInTheDocument();
            });
        });

        it('Dever renderizar o side descrition', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-description-side-description');

                expect(section).toBeInTheDocument();
            });
        });

        it('Dever renderizar o side staff', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-description-side-staff');

                expect(section).toBeInTheDocument();
            });
        });
    });

    it('Dever renderizar a seção elenco principal', async () => {
        await waitFor(() => {
            const section = screen.getByTestId('section-elenco-principal');

            expect(section).toBeInTheDocument();
        });
    });
});
