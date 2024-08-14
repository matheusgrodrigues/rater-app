import styled from 'styled-components';

export default function CardMovieHighlightLoader() {
    return <CardMovieHighlightStyled>Carregando...</CardMovieHighlightStyled>;
}

const CardMovieHighlightStyled = styled.div`
    width: 100%;
    height: 100%;

    min-height: ${({ theme }) => theme.utils.pxToRem(284)};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(836)};`)}
    ${({ theme }) => theme.utils.screen('lg', `height: ${theme.utils.pxToRem(836)};`)}

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%);

    border: ${({ theme }) => theme.utils.pxToRem(1)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};

    justify-content: center;
    align-items: center;
    display: flex;
`;
