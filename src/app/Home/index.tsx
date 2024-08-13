import { Suspense, useRef } from 'react';

import styled from 'styled-components';

import CardMovieHighlight, { CardMovieHighlightLoader } from '../../components/organisms/CardMovieHighlight';
import CarrouselMovie, { CarrouselMovieRef } from '../../components/organisms/CarrouselMovie';
import CarrouselActor, { CarrouselActorRef } from '../../components/organisms/CarrouselActor';
import HeadingWithBar from '../../components/organisms/HeadingWithBar';

import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';
import { Await, useLoaderData } from 'react-router';
import { LoaderHomeData } from './loader';

function Home() {
    const carrouselLatestReleaseRef = useRef<CarrouselMovieRef>(null);
    const carrouselRecommended = useRef<CarrouselMovieRef>(null);
    const carrouselActor = useRef<CarrouselActorRef>(null);

    const { highlightMovies } = useLoaderData() as LoaderHomeData;

    console.log(highlightMovies);

    return (
        <>
            <SectionHighlight data-testid="section-highlight">
                <CardMovieHighlightLoader />

                <SectionHighligsToo>
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

                    <div>
                        <CarrouselMovie enableVerticalOnDesktop />
                    </div>
                </SectionHighligsToo>
            </SectionHighlight>

            <SectionCarrousel data-testid="section-latest-releases">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-latest-releases"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Ultimos lançamentos
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-latest-releases-prev"
                            onClick={() => carrouselLatestReleaseRef.current?.slidePrev()}
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
                            data-testid="section-latest-releases-next"
                            onClick={() => carrouselLatestReleaseRef.current?.slideNext()}
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
                    <CarrouselMovie ref={carrouselLatestReleaseRef} />
                </div>
            </SectionCarrousel>

            <SectionCarrousel data-testid="section-recommended">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-recommended"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Recomendados
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-recommended-prev"
                            onClick={() => carrouselRecommended.current?.slidePrev()}
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
                            onClick={() => carrouselRecommended.current?.slideNext()}
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
                    <CarrouselMovie ref={carrouselRecommended} />
                </div>
            </SectionCarrousel>

            <SectionCarrousel data-testid="section-celebrities">
                <TitleCarrouselContainer>
                    <HeadingWithBar
                        data-testid="title-celebrities"
                        config={{
                            fontWeight: '600',
                            fontSize: '16',
                            color: 'secondary-accessible-text-12',
                        }}
                    >
                        Celebridades
                    </HeadingWithBar>

                    <ButtonNextPrev>
                        <Button
                            data-testid="section-celebrities-prev"
                            onClick={() => carrouselActor.current?.slidePrev()}
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
                            onClick={() => carrouselActor.current?.slideNext()}
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
                    <CarrouselActor ref={carrouselActor} />
                </div>
            </SectionCarrousel>
        </>
    );
}

export default Home;

const SectionHighlight = styled.div`
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

const SectionHighligsToo = styled.div`
    width: 100%;
    height: 100%;

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['24']} 0;

    ${({ theme }) => theme.utils.screen('lg', `padding: 0;`)}

    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.screen('lg', `gap: ${theme.ref.spacing['12']};`)}
`;

const SectionCarrousel = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) => theme.utils.container()}

    padding-top:0 !important;
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
