import { Suspense } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import CardTrailerLoader from '../../components/organisms/CardTrailer/CardTrailerLoader';
import CardTrailer from '../../components/organisms/CardTrailer/CardTrailer';

import useRatterStore from '../store';
import CarrouselCategory from '../../components/organisms/CarrouselCategory';
import CarrouselCardCategoryLoader from '../../components/organisms/CarrouselCategory/CarrouselCardCategoryLoader';
import HeadingWithBar from '../../components/organisms/HeadingWithBar';
import Paragraph from '../../components/atoms/Paragraph';
import Heading from '../../components/atoms/Heading';
import Badge from '../../components/atoms/Badge';
import {
    formatGenre,
    formatPopularity,
    formatReleaseDate,
    formatRuntime,
    formatVoteAverage,
} from '../../core/utils/format';
import SpecRatingView from '../../components/organisms/SpecRatingView';
import SpecDuratCatYear from '../../components/organisms/SpecDuratCatYear';
import { MovieDetailSchema } from '../../schemas/MovieSchema';

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

            <SectionDescription data-testid="section-description">
                <SectionDescSideDescStyled>
                    <SectionDescSideDescContent>
                        <SectionDescSideDescTitleContainer>
                            <SectionDescSideDescTitle
                                data-testid="card-movie-higlight-title"
                                config={{
                                    fontWeight: '700',
                                    fontSize: '40',
                                    color: 'white',
                                }}
                            >
                                Deadpool & Wolverine
                            </SectionDescSideDescTitle>

                            <SpecRatingViewOverryde
                                data-testid="card-movie-higlight-spec-rating-view"
                                config={{
                                    ratingLabel: formatVoteAverage(`8.2`),
                                    viewLabel: formatPopularity(12000),
                                }}
                            />
                        </SectionDescSideDescTitleContainer>

                        <SpecDuratCatYearOverryde
                            data-testid="card-movie-higlight-spec-durat-cat-year"
                            config={{
                                duratLabel: formatRuntime(30000),
                                yearLabel: formatReleaseDate('2024-05-23'),
                            }}
                        />

                        <SectionDescSideDescSinopse>
                            <SectionDescSideDescSinopseText
                                data-testid="card-movie-higlight-sinopse"
                                config={{
                                    fontWeight: 600,
                                    color: 'secondary-accessible-text-12',
                                    size: 16,
                                }}
                            >
                                Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao
                                Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para
                                salvar seu universo da extinção.
                            </SectionDescSideDescSinopseText>
                        </SectionDescSideDescSinopse>
                    </SectionDescSideDescContent>
                </SectionDescSideDescStyled>

                <SectionDescSideStaff>
                    <HeadingWithBar
                        data-testid="title-highlighs-too"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Destaques também
                    </HeadingWithBar>
                </SectionDescSideStaff>
            </SectionDescription>
        </>
    );
}

const SectionTrailer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) =>
        theme.utils.screen('md', `padding-top: 0 !important; padding-bottom: ${theme.ref.padding['12']} !important;`)}

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

    padding-top: 0 !important;
`;

const SectionDescription = styled.div`
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

const SectionDescSideDescStyled = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;

    ${({ theme }) => theme.utils.screen('md', `padding-top: ${theme.ref.spacing['12']};`)}
`;

const SectionDescSideDescContent = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

const SectionDescSideDescTitleContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    align-items: center;
`;

const SpecDuratCatYearOverryde = styled(SpecDuratCatYear)`
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};

    & > strong {
        font-weight: ${({ theme }) => theme.ref.fontWeight['500']};
    }
`;

const SpecRatingViewOverryde = styled(SpecRatingView)`
    & > strong:nth-child(1) {
        font-size: ${({ theme }) => theme.ref.fontSize['16']};
        ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['20']};`)};
    }

    & > strong:nth-child(2) {
        font-size: ${({ theme }) => theme.ref.fontSize['13']};
        ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['14']};`)};
    }
`;

const SectionDescSideDescTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['40']};`)}
`;

const SectionDescSideDescSinopse = styled.div`
    max-width: ${({ theme }) => theme.utils.pxToRem(568)};

    ${({ theme }) =>
        theme.utils.screen('md', `margin-bottom: ${theme.ref.spacing['48']}; max-width: ${theme.utils.pxToRem(868)};`)}

    z-index: 2;
`;

const SectionDescSideDescSinopseText = styled(Paragraph)`
    line-height: ${({ theme }) => theme.ref.lineHeight['19']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};
    font-size: ${({ theme }) => theme.ref.fontSize['14']};
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-12']};

    ${({ theme }) =>
        theme.utils.screen('md', `font-size: ${theme.ref.fontSize['20']}; line-height: ${theme.ref.lineHeight['28']};`)}
`;

const SectionDescSideStaff = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)};`)}
`;
