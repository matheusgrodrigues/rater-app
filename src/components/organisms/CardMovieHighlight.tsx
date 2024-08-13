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
                <CardMovieHighlightBadgeMobile>
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
                </CardMovieHighlightBadgeMobile>

                <CardMovieHighlightBadgeDesktop>
                    <Badge
                        data-testid="card-movie-higlight-badge"
                        config={{
                            iconColor: 'white',
                            label: 'Em destaque',
                            icon: 'fire',
                        }}
                    />
                </CardMovieHighlightBadgeDesktop>

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

/*
// TODO: este aparentemente é o hover, adicionar animação quando passar hover sob a imagem.

 background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22');

*/

const CardMovieHighlightStyled = styled.div`
    width: 100%;
    height: 100%;

    min-height: ${({ theme }) => theme.utils.pxToRem(284)};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(826)};`)}
    ${({ theme }) => theme.utils.screen('lg', `height: ${theme.utils.pxToRem(826)};`)}

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};

    flex-direction: column;
    display: flex;
    position: relative;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%),
        url('https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22');

    background-origin: border-box;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    overflow: hidden;
`;

const CardMovieHighlightContent = styled.div`
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;

    gap: ${({ theme }) => theme.ref.spacing['12']};

    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('lg', `padding: ${theme.ref.padding['24']};`)}
    ${({ theme }) => theme.utils.screen('2xl', `padding: ${theme.ref.padding['48']};`)}

    transition: transform 0.3s ease-out;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -70%;
        left: 0;
        width: 100%;
        height: 70%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%);
        transition: bottom 0.3s ease-in-out;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-20px);
        transition: transform 0.3s ease-in;

        &::before {
            bottom: -20%;
        }
    }
`;

const CardMovieHighlightSpec = styled.div`
    display: none;

    ${({ theme }) => theme.utils.screen('md', `display: flex; gap: ${theme.ref.spacing['24']};`)}
`;

const CardMovieHighlightTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['16']};

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['40']};`)}
`;

const CardMovieHighlightSinopse = styled.div`
    max-width: ${({ theme }) => theme.utils.pxToRem(560)};

    ${({ theme }) =>
        theme.utils.screen('sm', `margin-bottom: ${theme.ref.spacing['8']}; max-width: ${theme.utils.pxToRem(319)};`)}

    ${({ theme }) =>
        theme.utils.screen('md', `margin-bottom: ${theme.ref.spacing['48']}; max-width: ${theme.utils.pxToRem(555)};`)}
`;

const CardMovieHighlightSinopseText = styled(Paragraph)`
    line-height: ${({ theme }) => theme.ref.lineHeight['19']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['500']};
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `color: ${theme.ref.colors['secondary-accessible-text-12']}; line-height: ${theme.ref.lineHeight['24']}; font-size: ${theme.ref.fontSize['16']};`
        )}
`;

const CardMovieHighlightBadgeDesktop = styled.div`
    display: none;

    ${({ theme }) => theme.utils.screen('md', `display: block;`)}
`;

const CardMovieHighlightBadgeMobile = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['6']};

    position: absolute;
    top: ${({ theme }) => theme.utils.pxToRem(12)};

    ${({ theme }) => theme.utils.screen('md', `display: none;`)}
`;
