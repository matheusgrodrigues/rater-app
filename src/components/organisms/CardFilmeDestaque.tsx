import styled from 'styled-components';

import SpecDuratCatYear from './SpecDuratCatYear';
import SpecRatingView from './SpecRatingView';
import Heading from '../atoms/Heading';
import Badge from '../atoms/Badge';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const CardFilmeDestaqueStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${({ theme }) => theme.utils.pxToRem(284)};
    max-height: ${({ theme }) => theme.utils.pxToRem(826)};
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    padding-bottom: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        padding-bottom: ${theme.ref.padding['61']};
        `
        )}
`;

const CardFilmeDestaqueContent = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(560)};
`;

const CardFilmeDestaqueSpec = styled.div`
    display: none;

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
      display: flex;
     gap: ${theme.ref.spacing['24']};
    `
        )}
`;

const CardFilmeDestaqueSinopse = styled.div`
    margin-bottom: ${({ theme }) => theme.ref.spacing['48']};
    max-width: ${({ theme }) => theme.utils.pxToRem(555)};
`;

const CardFilmeDestaqueTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
 font-size: ${theme.ref.fontSize['40']};
`
        )}
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

                <CardFilmeDestaqueTitle
                    data-testid="card-filme-destaque-title"
                    config={{
                        fontWeight: '700',
                        fontSize: '40',
                        color: 'white',
                    }}
                >
                    Deadpool & Wolverine
                </CardFilmeDestaqueTitle>

                <CardFilmeDestaqueSpec data-testid="card-filme-destaque-spec">
                    <SpecRatingView
                        data-testid="card-filme-destaque-spec-rating-view"
                        config={{
                            ratingLabel: '8.2',
                            viewLabel: '120 mil',
                        }}
                    />

                    <SpecDuratCatYear
                        data-testid="card-filme-destaque-spec-durat-cat-year"
                        config={{
                            duratLabel: '2h 8m',
                            yearLabel: '2024',
                            catLabel: 'Comedy, Action, Adventure, Superhero',
                        }}
                    />
                </CardFilmeDestaqueSpec>

                <CardFilmeDestaqueSinopse>
                    <Paragraph
                        data-testid="card-filme-destaque-sinopse"
                        config={{
                            fontWeight: 600,
                            color: 'secondary-accessible-text-12',
                            size: 16,
                        }}
                    >
                        Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo
                        Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu
                        universo da extinção.
                    </Paragraph>
                </CardFilmeDestaqueSinopse>

                <Button config={{ variant: 'transparent-button' }}>
                    <Heading
                        data-testid="card-filme-destaque-title"
                        config={{
                            fontWeight: '600',
                            fontSize: '20',
                            color: 'white',
                        }}
                    >
                        Assitir ao trailer
                    </Heading>

                    <Icon
                        config={{
                            color: 'white',
                            icon: 'play-right',
                            size: 20,
                        }}
                    />
                </Button>
            </CardFilmeDestaqueContent>
        </CardFilmeDestaqueStyled>
    );
}
