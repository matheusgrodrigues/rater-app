import styled from 'styled-components';

import CardMovieHighlight from '../../components/organisms/CardMovieHighlight';
import Carrousel from '../../components/organisms/Carrousel';

function Home() {
    return (
        <SectionHighlightsToo data-testid="section-destaques">
            <CardMovieHighlight data-testid="card-filme-destaque" />

            <CarrouselHighligsToo>
                <Carrousel data-testid="carrousel-destaques-tambem" />
            </CarrouselHighligsToo>
        </SectionHighlightsToo>
    );
}

export default Home;

const SectionHighlightsToo = styled.div`
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

const CarrouselHighligsToo = styled.div`
    width: 100%;

    ${({ theme }) => theme.utils.screen('md', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['12']} 0;
`;
