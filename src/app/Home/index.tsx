import { useRef } from 'react';

import styled from 'styled-components';

import CardMovieHighlight from '../../components/organisms/CardMovieHighlight';
import HeadingWithBar from '../../components/organisms/HeadingWithBar';
import CarrouselMovie, { CarrouselMovieRef } from '../../components/organisms/CarrouselMovie';
import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';

function Home() {
    const carrouselLatestReleaseRef = useRef<CarrouselMovieRef>(null);

    return (
        <>
            <SectionHighlight data-testid="section-highlight">
                <CardMovieHighlight data-testid="card-movie-highlight" />

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

            <SectionLatestReleases data-testid="section-latest-releases">
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
                            data-testid="section-latest-releases-next"
                            onClick={() => carrouselLatestReleaseRef.current?.slideNext()}
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
                            data-testid="section-latest-releases-prev"
                            onClick={() => carrouselLatestReleaseRef.current?.slidePrev()}
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
            </SectionLatestReleases>
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

const SectionLatestReleases = styled.div`
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
