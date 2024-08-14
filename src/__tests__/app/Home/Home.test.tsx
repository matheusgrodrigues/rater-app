import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Home from '../../../app/Home';
import { act, render, screen, waitFor } from '../../../core/utils/test-utils/testing-library';
import fetchMock from 'jest-fetch-mock';
import { LoaderHomeData } from '../../../app/Home/loader';

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

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        loader: () => ({
            highlightMovies: Promise.resolve({ results: [] }),
            highlightMovieDetail: Promise.resolve({ results: [] }),
            latestReleases: Promise.resolve({ results: [] }),
            recommended: Promise.resolve({ results: [] }),
        }),
    },
];

describe('Deve renderizar a Home corretamente', () => {
    beforeEach(async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ results: [] }));
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        await act(async () => render(<RouterProvider router={router} />));
    });

    describe('Deve renderizar a seção Destaques, corretamente', () => {
        it('Deve renderizar a seção Destaques', async () => {
            await waitFor(() => {
                const sectionDestaques = screen.getByTestId('section-highlight');
                expect(sectionDestaques).toBeInTheDocument();
            });
        });

        it('Deve renderizar o titulo', async () => {
            await waitFor(() => {
                const title = screen.getByTestId('title-highlighs-too');
                expect(title).toBeInTheDocument();
            });
        });

        it('Deve renderizar o CardFilmeDestaque', async () => {
            await waitFor(() => {
                const cardDestaque = screen.getByTestId('card-movie-highlight');
                expect(cardDestaque).toBeInTheDocument();
            });
        });
    });

    describe('Deve renderizar a seção Latest Releases, corretamente', () => {
        it('Deve renderizar a seção Destaques', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-latest-releases');
                expect(section).toBeInTheDocument();
            });
        });

        it('Deve renderizar o titulo', async () => {
            await waitFor(() => {
                const title = screen.getByTestId('title-latest-releases');
                expect(title).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-prev', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-latest-releases-prev');
                expect(arrow).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-next', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-latest-releases-next');
                expect(arrow).toBeInTheDocument();
            });
        });
    });

    describe('Deve renderizar a seção Recommended, corretamente', () => {
        it('Deve renderizar a seção Destaques', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-recommended');
                expect(section).toBeInTheDocument();
            });
        });

        it('Deve renderizar o titulo', async () => {
            await waitFor(() => {
                const title = screen.getByTestId('title-recommended');
                expect(title).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-prev', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-recommended');
                expect(arrow).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-next', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-recommended');
                expect(arrow).toBeInTheDocument();
            });
        });
    });

    describe('Deve renderizar a seção Celebrities, corretamente', () => {
        it('Deve renderizar a seção Destaques', async () => {
            await waitFor(() => {
                const section = screen.getByTestId('section-celebrities');
                expect(section).toBeInTheDocument();
            });
        });

        it('Deve renderizar o titulo', async () => {
            await waitFor(() => {
                const title = screen.getByTestId('title-celebrities');
                expect(title).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-prev', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-celebrities');
                expect(arrow).toBeInTheDocument();
            });
        });

        it('Deve renderizar a arrow-next', async () => {
            await waitFor(() => {
                const arrow = screen.getByTestId('section-celebrities');
                expect(arrow).toBeInTheDocument();
            });
        });
    });
});
