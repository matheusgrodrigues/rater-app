import { Suspense } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import CardTrailerLoader from '../../components/organisms/CardTrailer/CardMovieHightlightLoader';
import CardTrailer from '../../components/organisms/CardTrailer/CardMovieHighlight';

import useRatterStore from '../store';

export default function Movie() {
    const { movieHighlightDetail } = useRatterStore();

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
        </>
    );
}

const SectionTrailer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: 0 ${({ theme }) => theme.ref.padding['12']};

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
