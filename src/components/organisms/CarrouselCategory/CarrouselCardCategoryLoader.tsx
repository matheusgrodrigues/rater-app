import React from 'react';
import styled from 'styled-components';

interface CarrouselCardCategoryLoaderProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
}

export default function CarrouselCardCategoryLoader({ children, ...props }: CarrouselCardCategoryLoaderProps) {
    return <CardCategoryLoader>{children ?? 'Carregando...'}</CardCategoryLoader>;
}

const CardCategoryLoader = styled.div`
    width: 100%;
    border: ${({ theme }) => theme.utils.pxToRem(1)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};
    justify-content: center;
    align-items: center;
    display: flex;
    padding: ${({ theme }) => theme.ref.spacing['4']} ${({ theme }) => theme.ref.spacing['12']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
