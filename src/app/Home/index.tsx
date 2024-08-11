import styled from 'styled-components';

import CardFilmeDestaque from '../../components/organisms/CardMovieHighlight';
import CarrouselFilme from '../../components/organisms/CarrouselMovie';

function Home() {
    return (
        <SectionDestaques data-testid="section-destaques">
            <CardFilmeDestaque data-testid="card-filme-destaque" />

            <DestaquesTambem>
                <CarrouselFilme data-testid="carrousel-destaques-tambem" />
            </DestaquesTambem>
        </SectionDestaques>
    );
}

export default Home;

const SectionDestaques = styled.div`
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

const DestaquesTambem = styled.div`
    width: 100%;

    ${({ theme }) => theme.utils.screen('md', `max-width: ${theme.utils.pxToRem(380)};`)}

    padding: ${({ theme }) => theme.ref.padding['12']} 0;
`;
