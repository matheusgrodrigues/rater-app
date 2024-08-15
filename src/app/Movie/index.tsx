import { Suspense } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import CardTrailerLoader from '../../components/organisms/CardTrailer/CardTrailerLoader';
import CardTrailer from '../../components/organisms/CardTrailer/CardTrailer';

import useRatterStore from '../store';
import CarrouselCategory from '../../components/organisms/CarrouselCategory';
import CarrouselCardCategoryLoader from '../../components/organisms/CarrouselCategory/CarrouselCardCategoryLoader';

export default function Movie() {
    const { movieHighlightDetail, hightlightMovies } = useRatterStore();

    return (
        <>
            <SectionTrailer data-testid="section-trailer">
                <Suspense fallback={<CardTrailerLoader />}>
                    <Await resolve={movieHighlightDetail}>
                        {(resolvedMovieHightlightDetail) => (
                            <CardTrailer highlightMovie={resolvedMovieHightlightDetail} />
                        )}
                    </Await>
                </Suspense>
            </SectionTrailer>

            <SectionCarrousel data-testid="section-category">
                <div>
                    <Suspense fallback={<CarrouselCardCategoryLoader />}>
                        <Await resolve={hightlightMovies}>
                            {(resolvedHightlightMovies) => (
                                <CarrouselCategory
                                    movies={resolvedHightlightMovies ? resolvedHightlightMovies.results : undefined}
                                />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>
        </>
    );
}

const SectionTrailer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('md', `padding-top: 0 !important;`)}

    ${({ theme }) =>
        theme.utils.screen(
            'lg',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};

                 ${theme.utils.screen('lg', `${theme.utils.container()}`)}

        `
        )}
`;

const SectionCarrousel = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.container()}

    padding-top:0 !important;
`;
