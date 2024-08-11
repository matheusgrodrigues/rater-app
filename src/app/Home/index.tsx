import styled from 'styled-components';

import CardFilmeDestaque from '../../components/organisms/CardFilmeDestaque';
import CarrouselFilme from '../../components/organisms/CarrouselFilme';

const SectionDestaques = styled.div``;

const Destaque = styled.div``;

const DestaquesTambem = styled.div``;

function Home() {
    return (
        <SectionDestaques data-testid="section-destaques">
            <Destaque data-testid="home-destaque">
                <CardFilmeDestaque data-testid="card-filme-destaque" />
            </Destaque>

            <DestaquesTambem data-testid="home-destaques-tambem">
                <h1>Destaques também</h1>
                <CarrouselFilme data-testid="carrousel-destaques-tambem" />
            </DestaquesTambem>
        </SectionDestaques>
    );
}

export default Home;
