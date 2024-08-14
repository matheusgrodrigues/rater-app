import styled from 'styled-components';

interface CardActorLoaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
}

export default function CardActorLoader({ children }: CardActorLoaderProps) {
    return <CardActorLoaderStyled>{children ?? 'Carregando...'}</CardActorLoaderStyled>;
}

const CardActorLoaderStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(200)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(268)}; height: ${theme.utils.pxToRem(253)};`)}

    border: ${({ theme }) => theme.utils.pxToRem(1)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};

    justify-content: center;
    align-items: center;
    display: flex;

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
