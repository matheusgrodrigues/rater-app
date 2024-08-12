import styled from 'styled-components';

import CardMovieHighlight from '../../components/organisms/CardMovieHighlight';
import Carrousel from '../../components/organisms/CarrouselMovie';

function Home() {
    return (
        <SectionHighlight data-testid="section-destaques">
            <CardMovieHighlight data-testid="card-filme-destaque" />

            <SectionHighligsToo>
                <Carrousel data-testid="carrousel-destaques-tambem" />
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

    ${({ theme }) => theme.utils.screen('md', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['12']} 0;
`;
