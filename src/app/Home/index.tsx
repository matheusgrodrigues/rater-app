import styled from 'styled-components';

import CardFilmeDestaque from '../../components/organisms/CardFilmeDestaque';
import CarrouselFilme from '../../components/organisms/CarrouselFilme';

const SectionDestaques = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};
        `
        )}
`;

const Destaque = styled.div`
    flex-grow: 1;
    border: 1px solid red;
    height: 826px;
`;

const DestaquesTambem = styled.div`
    width: 100%;

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
                max-width: ${theme.utils.pxToRem(380)};
            `
        )}
`;

function Home() {
    return (
        <SectionDestaques data-testid="section-destaques">
            <Destaque>
                <CardFilmeDestaque data-testid="card-filme-destaque" />
            </Destaque>

            <DestaquesTambem>
                <CarrouselFilme data-testid="carrousel-destaques-tambem" />
            </DestaquesTambem>
        </SectionDestaques>
    );
}

export default Home;
