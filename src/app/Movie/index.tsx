import { Suspense } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import CardTrailerLoader from '../../components/organisms/CardTrailer/CardTrailerLoader';
import CardTrailer from '../../components/organisms/CardTrailer/CardTrailer';

import useRatterStore from '../store';
import CarrouselCategory from '../../components/organisms/CarrouselCategory';
import CarrouselCardCategoryLoader from '../../components/organisms/CarrouselCategory/CarrouselCardCategoryLoader';
import Paragraph from '../../components/atoms/Paragraph';
import Heading from '../../components/atoms/Heading';
import { formatPopularity, formatReleaseDate, formatRuntime, formatVoteAverage } from '../../core/utils/format';
import SpecRatingView from '../../components/organisms/SpecRatingView';
import SpecDuratCatYear from '../../components/organisms/SpecDuratCatYear';

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
                <SectionDescriptionSideDescContent data-testid="section-description-side-description">
                    <SectionDescriptionSideDescTitleContainer>
                        <SectionDescriptionSideDescTitle
                            data-testid="card-movie-higlight-title"
                            config={{
                                fontWeight: '700',
                                fontSize: '40',
                                color: 'white',
                            }}
                        >
                            Deadpool & Wolverine
                        </SectionDescriptionSideDescTitle>

                        <SpecRatingViewOverride
                            data-testid="card-movie-higlight-spec-rating-view"
                            config={{
                                ratingLabel: formatVoteAverage(`8.2`),
                                viewLabel: formatPopularity(12000),
                            }}
                        />
                    </SectionDescriptionSideDescTitleContainer>
                    <SpecDuratCatYearOverride
                        data-testid="card-movie-higlight-spec-durat-cat-year"
                        config={{
                            duratLabel: formatRuntime(30000),
                            yearLabel: formatReleaseDate('2024-05-23'),
                        }}
                    />
                    <SectionDescriptionSideDescSinopse>
                        <SectionDescriptionSideDescSinopseText
                            data-testid="card-movie-higlight-sinopse"
                            config={{
                                fontWeight: 600,
                                color: 'secondary-accessible-text-12',
                                size: 16,
                            }}
                        >
                            Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo
                            Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu
                            universo da extinção.
                        </SectionDescriptionSideDescSinopseText>
                    </SectionDescriptionSideDescSinopse>
                </SectionDescriptionSideDescContent>

                <SectionDescriptionSideStaff data-testid="section-description-side-staff">
                    <StaffItem>
                        <Heading config={{ fontWeight: '500', fontSize: '16', color: 'secondary-accessible-text-12' }}>
                            Direção
                        </Heading>
                        <Paragraph config={{ fontWeight: 500, color: 'secondary-accessible-text-11', size: 16 }}>
                            Shawn Levy
                        </Paragraph>
                    </StaffItem>

                    <StaffItem>
                        <Heading config={{ fontWeight: '500', fontSize: '16', color: 'secondary-accessible-text-12' }}>
                            Direção
                        </Heading>
                        <Paragraph config={{ fontWeight: 500, color: 'secondary-accessible-text-11', size: 16 }}>
                            Shawn Levy
                        </Paragraph>
                    </StaffItem>

                    <StaffItem>
                        <Heading config={{ fontWeight: '500', fontSize: '16', color: 'secondary-accessible-text-12' }}>
                            Direção
                        </Heading>
                        <Paragraph config={{ fontWeight: 500, color: 'secondary-accessible-text-11', size: 16 }}>
                            Shawn Levy
                        </Paragraph>
                    </StaffItem>
                </SectionDescriptionSideStaff>
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

const SectionDescriptionSideDescContent = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    position: relative;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};

    ${({ theme }) => theme.utils.screen('md', `padding-top: ${theme.ref.spacing['12']};`)}
`;

const SectionDescriptionSideDescTitleContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    align-items: center;
`;

const SpecDuratCatYearOverride = styled(SpecDuratCatYear)`
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};

    & > strong {
        font-weight: ${({ theme }) => theme.ref.fontWeight['500']};
    }
`;

const SpecRatingViewOverride = styled(SpecRatingView)`
    & > strong:nth-child(1) {
        font-size: ${({ theme }) => theme.ref.fontSize['16']};
        ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['20']};`)};
    }

    & > strong:nth-child(2) {
        font-size: ${({ theme }) => theme.ref.fontSize['13']};
        ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['14']};`)};
    }
`;

const SectionDescriptionSideDescTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['40']};`)}
`;

const SectionDescriptionSideDescSinopse = styled.div`
    max-width: ${({ theme }) => theme.utils.pxToRem(568)};

    z-index: 2;
`;

const SectionDescriptionSideDescSinopseText = styled(Paragraph)`
    line-height: ${({ theme }) => theme.ref.lineHeight['19']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};
    font-size: ${({ theme }) => theme.ref.fontSize['14']};
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-12']};

    ${({ theme }) =>
        theme.utils.screen('md', `font-size: ${theme.ref.fontSize['20']}; line-height: ${theme.ref.lineHeight['28']};`)}
`;

const SectionDescriptionSideStaff = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};
    padding-top: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)};`)}
`;

const StaffItem = styled.div`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    flex-direction: column;
    justify-content: center;
    display: flex;
    position: relative;
    padding-left: ${({ theme }) => theme.ref.spacing['12']};

    &::before {
        content: '';
        height: 93%;
        width: ${({ theme }) => theme.utils.pxToRem(4)};
        border-radius: ${({ theme }) => theme.ref.borderRadius['9']};
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    }

    & > p {
        font-weight: ${({ theme }) => theme.ref.fontWeight['400']};
    }
`;
