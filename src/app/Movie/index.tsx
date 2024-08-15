import { Suspense, useRef } from 'react';
import { Await } from 'react-router';
import styled from 'styled-components';

import useRatterStore from '../store';

import CarrouselCategory, { CarrouselCategoryLoader } from '../../components/organisms/CarrouselCategory';
import CardTrailer, { CardTrailerLoader } from '../../components/organisms/CardTrailer';
import SpecDuratCatYear from '../../components/organisms/SpecDuratCatYear';
import SpecRatingView from '../../components/organisms/SpecRatingView';
import HeadingWithBar from '../../components/organisms/HeadingWithBar';

import Paragraph from '../../components/atoms/Paragraph';
import Heading from '../../components/atoms/Heading';
import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';

import CardActorLoader from '../../components/organisms/CarrouselActor/CardActorLoader';
import CarrouselActor, { CarrouselActorRef } from '../../components/organisms/CarrouselActor';

import {
    formatGenre,
    formatPopularity,
    formatReleaseDate,
    formatRuntime,
    formatVoteAverage,
} from '../../core/utils/format';
import CarrouselMovie, { CarrouselCardMovieLoader } from '../../components/organisms/CarrouselMovie';
import { MovieDetailSchema } from '../../schemas/MovieSchema';

export default function Movie() {
    const { hightlightMovies, movieDetail, recommended, actors } = useRatterStore();

    const carrouselSimilarRef = useRef<CarrouselActorRef>(null);
    const carrouselActorRef = useRef<CarrouselActorRef>(null);

    return (
        <>
            <SectionTrailer data-testid="section-trailer">
                <Suspense fallback={<CardTrailerLoader />}>
                    <Await resolve={movieDetail}>
                        {(resolvedMovieDetail: MovieDetailSchema) => <CardTrailer movieDetail={resolvedMovieDetail} />}
                    </Await>
                </Suspense>
            </SectionTrailer>

            <SectionCarrousel data-testid="section-category">
                <div>
                    <Suspense fallback={<CarrouselCategoryLoader />}>
                        <Await resolve={movieDetail}>
                            {(resolvedMovieDetail: MovieDetailSchema) => (
                                <CarrouselCategory
                                    genres={resolvedMovieDetail ? resolvedMovieDetail.genres : undefined}
                                />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>

            <SectionDescription data-testid="section-description">
                <Suspense fallback={<></>}>
                    <Await resolve={movieDetail}>
                        {(resolvedMovieDetail: MovieDetailSchema) => (
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
                                        {resolvedMovieDetail.title}
                                    </SectionDescriptionSideDescTitle>

                                    <SpecRatingViewOverride
                                        data-testid="card-movie-higlight-spec-rating-view"
                                        config={{
                                            ratingLabel: formatVoteAverage(`${movieDetail!.vote_average}`),
                                            viewLabel: formatPopularity(movieDetail!.popularity),
                                        }}
                                    />
                                </SectionDescriptionSideDescTitleContainer>
                                <SpecDuratCatYearOverride
                                    data-testid="card-movie-higlight-spec-durat-cat-year"
                                    config={{
                                        duratLabel: formatRuntime(movieDetail!.runtime),
                                        yearLabel: formatReleaseDate(movieDetail!.release_date),
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
                                        {movieDetail?.overview}
                                    </SectionDescriptionSideDescSinopseText>
                                </SectionDescriptionSideDescSinopse>
                            </SectionDescriptionSideDescContent>
                        )}
                    </Await>
                </Suspense>

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

            <SectionCarrousel data-testid="section-elenco-principal">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-celebrities"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Elenco principal
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-celebrities-prev"
                            onClick={() => carrouselActorRef.current?.slidePrev()}
                            config={{ variant: 'rounded-icon-button' }}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-left',
                                    size: 20,
                                }}
                            />
                        </Button>

                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="section-celebrities-next"
                            onClick={() => carrouselActorRef.current?.slideNext()}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-right',
                                    size: 20,
                                }}
                            />
                        </Button>
                    </ButtonNextPrev>
                </TitleCarrouselContainer>

                <div>
                    <Suspense fallback={<CardActorLoader />}>
                        <Await resolve={actors}>
                            {(resolvedActors) => (
                                <CarrouselActor
                                    actors={resolvedActors ? resolvedActors.results : undefined}
                                    ref={carrouselActorRef}
                                />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </SectionCarrousel>

            <SectionCarrousel data-testid="section-filmes-semelhantes">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-recommended"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Semelhantes
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-recommended-prev"
                            onClick={() => carrouselSimilarRef.current?.slidePrev()}
                            config={{ variant: 'rounded-icon-button' }}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-left',
                                    size: 20,
                                }}
                            />
                        </Button>

                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="section-recommended-next"
                            onClick={() => carrouselSimilarRef.current?.slideNext()}
                            style={{ background: 'none', position: 'relative', top: '0.5rem' }}
                        >
                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'chevron-right',
                                    size: 20,
                                }}
                            />
                        </Button>
                    </ButtonNextPrev>
                </TitleCarrouselContainer>

                <div>
                    <Suspense fallback={<CarrouselCardMovieLoader />}>
                        <Await resolve={recommended}>
                            {(resolvedSimilar) => (
                                <CarrouselMovie
                                    movies={resolvedSimilar ? resolvedSimilar.results : undefined}
                                    ref={carrouselSimilarRef}
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
    padding-bottom: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) =>
        theme.utils.screen('md', `padding-top: 0 !important; padding-bottom: ${theme.ref.spacing['48']} !important;`)}

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

    padding-left: ${({ theme }) => theme.ref.spacing['4']};

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

    padding-left: ${({ theme }) => theme.ref.spacing['4']};

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)}; padding-left: 0;`)}
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

const TitleCarrouselContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const ButtonNextPrev = styled.div`
    align-items: center;
    display: none;
    gap: ${({ theme }) => theme.ref.spacing['12']};

    ${({ theme }) => theme.utils.screen('md', `display: flex;`)}
`;
