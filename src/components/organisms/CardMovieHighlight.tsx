import styled from 'styled-components';

import SpecDuratCatYear from './SpecDuratCatYear';
import SpecRatingView from './SpecRatingView';
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface CardMovieHighlightProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CardMovieHighlight({ ...props }: CardMovieHighlightProps) {
    // TODO: adicionar imagem de fundo de acordo com a capa retornada pela api.

    return (
        <CardMovieHighlightStyled {...props}>
            <CardMovieHighlightContent>
                <CardMovieHighlightsBadgeMobile>
                    <Badge
                        data-testid="card-movie-higlight-badge"
                        config={{
                            iconColor: 'white',
                            icon: 'fire',
                        }}
                    />

                    <Badge
                        data-testid="card-movie-higlight-badge"
                        config={{
                            iconColor: 'yellow',
                            label: '8.2',
                            icon: 'star',
                        }}
                    />
                </CardMovieHighlightsBadgeMobile>

                <CardMovieHighlightsBadgeDesktop>
                    <Badge
                        data-testid="card-movie-higlight-badge"
                        config={{
                            iconColor: 'white',
                            label: 'Em destaque',
                            icon: 'fire',
                        }}
                    />
                </CardMovieHighlightsBadgeDesktop>

                <CardMovieHighlightTitle
                    data-testid="card-movie-higlight-title"
                    config={{
                        fontWeight: '700',
                        fontSize: '40',
                        color: 'white',
                    }}
                >
                    Deadpool & Wolverine
                </CardMovieHighlightTitle>

                <CardMovieHighlightSpec data-testid="card-movie-higlight-spec">
                    <SpecRatingView
                        data-testid="card-movie-higlight-spec-rating-view"
                        config={{
                            ratingLabel: '8.2',
                            viewLabel: '120 mil',
                        }}
                    />

                    <SpecDuratCatYear
                        data-testid="card-movie-higlight-spec-durat-cat-year"
                        config={{
                            duratLabel: '2h 8m',
                            yearLabel: '2024',
                            catLabel: 'Comedy, Action, Adventure, Superhero',
                        }}
                    />
                </CardMovieHighlightSpec>

                <CardMovieHighlightSinopse>
                    <CardMovieHighlightSinopseText
                        data-testid="card-movie-higlight-sinopse"
                        config={{
                            fontWeight: 600,
                            color: 'secondary-accessible-text-12',
                            size: 16,
                        }}
                    >
                        Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo
                        Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu
                        universo da extinção.
                    </CardMovieHighlightSinopseText>
                </CardMovieHighlightSinopse>

                <Button config={{ variant: 'transparent-button' }}>
                    <span>Assitir ao trailer</span>

                    <Icon
                        config={{
                            color: 'white',
                            icon: 'play-right',
                            size: 20,
                        }}
                    />
                </Button>
            </CardMovieHighlightContent>
        </CardMovieHighlightStyled>
    );
}

const CardMovieHighlightStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${({ theme }) => theme.utils.pxToRem(284)};
    max-height: ${({ theme }) => theme.utils.pxToRem(826)};
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    padding-bottom: ${({ theme }) => theme.ref.padding['12']};

    position: relative;

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        padding-bottom: ${theme.ref.padding['61']};
        `
        )}
`;

const CardMovieHighlightContent = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(560)};
`;

const CardMovieHighlightSpec = styled.div`
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

const CardMovieHighlightTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
 font-size: ${theme.ref.fontSize['40']};
`
        )}
`;

const CardMovieHighlightSinopse = styled.div`
    ${({ theme }) =>
        theme.utils.screen(
            'sm',
            `  
                margin-bottom: ${theme.ref.spacing['8']};
                max-width: ${theme.utils.pxToRem(319)};
`
        )}

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
                margin-bottom: ${theme.ref.spacing['48']};
                max-width: ${theme.utils.pxToRem(555)};


`
        )}
`;

const CardMovieHighlightSinopseText = styled(Paragraph)`
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    line-height: ${({ theme }) => theme.ref.lineHeight['19']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
                color: ${theme.ref.colors['secondary-accessible-text-12']};
                line-height: ${theme.ref.lineHeight['24']};
                font-size: ${theme.ref.fontSize['16']};
`
        )}
`;

const CardMovieHighlightsBadgeDesktop = styled.div`
    display: none;

    ${({ theme }) => theme.utils.screen('md', `display: block;`)}
`;

const CardMovieHighlightsBadgeMobile = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['6']};

    position: absolute;
    top: 0;

    ${({ theme }) => theme.utils.screen('md', `display: none;`)}
`;
