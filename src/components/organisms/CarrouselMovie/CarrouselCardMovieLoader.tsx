import React from 'react';
import styled from 'styled-components';

interface CarrouselCardMovieLoaderProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
}

export default function CarrouselCardMovieLoader({ children, ...props }: CarrouselCardMovieLoaderProps) {
    return <CardMovieLoader>{children ?? 'Carregando...'}</CardMovieLoader>;
}

const CardMovieLoader = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}

    border: ${({ theme }) => theme.utils.pxToRem(1)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};

    justify-content: center;
    align-items: center;
    display: flex;

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
