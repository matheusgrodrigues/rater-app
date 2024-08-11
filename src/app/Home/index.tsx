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
            'lg',
            `
                   height: ${theme.utils.pxToRem(826)};

        `
        )}

    ${({ theme }) =>
        theme.utils.screen(
            'lg',
            `
                justify-content: space-between;
                flex-direction: row;
                gap: ${theme.ref.spacing['12']};
        `
        )}
`;

function Home() {
    return (
        <SectionDestaques data-testid="section-destaques">
            <CardFilmeDestaque data-testid="card-filme-destaque" />
            <CarrouselFilme data-testid="carrousel-destaques-tambem" />
        </SectionDestaques>
    );
}

export default Home;
