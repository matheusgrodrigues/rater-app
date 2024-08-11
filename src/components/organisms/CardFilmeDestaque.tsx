import styled from 'styled-components';

import SpecDuratCatYear from './SpecDuratCatYear';
import SpecRatingView from './SpecRatingView';
import Heading from '../atoms/Heading';
import Badge from '../atoms/Badge';

const CardFilmeDestaqueStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${({ theme }) => theme.utils.pxToRem(284)};
    max-height: ${({ theme }) => theme.utils.pxToRem(826)};
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    background: blue;
`;

const CardFilmeDestaqueContent = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(560)};
`;

const CardFilmeDestaqueSpec = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};
`;

interface CardFilmeDestaqueProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CardFilmeDestaque({ ...props }: CardFilmeDestaqueProps) {
    // TODO: adicionar imagem de fundo de acordo com a capa retornada pela api.

    return (
        <CardFilmeDestaqueStyled {...props}>
            <CardFilmeDestaqueContent>
                <Badge
                    data-testid="card-filme-destaque-badge"
                    config={{
                        label: 'Em destaque',
                        icon: 'fire',
                    }}
                />

                <Heading
                    data-testid="card-filme-destaque-title"
                    config={{
                        variant: 'h1',
                        color: 'white',
                    }}
                >
                    Deadpool & Wolverine
                </Heading>

                <CardFilmeDestaqueSpec data-testid="card-filme-destaque-spec">
                    <SpecRatingView
                        config={{
                            ratingLabel: '8.2',
                            viewLabel: '120 mil',
                        }}
                    />

                    <SpecDuratCatYear
                        config={{
                            duratLabel: '2h 8m',
                            yearLabel: '2024',
                            catLabel: 'Comedy, Action, Adventure, Superhero...',
                        }}
                    />
                </CardFilmeDestaqueSpec>
            </CardFilmeDestaqueContent>
        </CardFilmeDestaqueStyled>
    );
}
