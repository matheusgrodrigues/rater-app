import styled from 'styled-components';

import CardMovieHighlight from '../../components/organisms/CardMovieHighlight';
import HeadingWithBar from '../../components/organisms/HeadingWithBar';
import CarrouselMovie from '../../components/organisms/CarrouselMovie';

function Home() {
    return (
        <SectionHighlight data-testid="section-destaques">
            <CardMovieHighlight data-testid="card-filme-destaque" />

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

                <CarrouselMovieContainer>
                    <CarrouselMovie data-testid="carrousel-movie" />
                </CarrouselMovieContainer>
            </SectionHighligsToo>
        </SectionHighlight>
    );
}

export default Home;

const SectionHighlight = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;

    padding: 0 ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(526)};`)}
    ${({ theme }) => theme.utils.screen('lg', `height: ${theme.utils.pxToRem(826)};`)}

    ${({ theme }) =>
        theme.utils.screen(
            'lg',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};

                 ${theme.utils.screen('lg', `${theme.utils.container()};`)}

        `
        )}
`;

const SectionHighligsToo = styled.div`
    width: 100%;
    height: 100%;

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['12']} 0;

    ${({ theme }) => theme.utils.screen('lg', `padding: 0;`)}

    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};
`;

const CarrouselMovieContainer = styled.div`
    display: flex;
`;
