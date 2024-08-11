import styled from 'styled-components';

const RoundedIconButton = styled.button`
    background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    max-height: ${({ theme }) => theme.utils.pxToRem(40)};
    min-height: ${({ theme }) => theme.utils.pxToRem(40)};
    min-width: ${({ theme }) => theme.utils.pxToRem(40)};
    max-width: ${({ theme }) => theme.utils.pxToRem(40)};
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`;

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    config: {
        variant: 'rounded-icon-button';
    };
}

export default function Button({ children, config, ...props }: ButtonProps) {
    const { variant } = config;

    return <>{variant === 'rounded-icon-button' && <RoundedIconButton {...props}>{children}</RoundedIconButton>}</>;
}
