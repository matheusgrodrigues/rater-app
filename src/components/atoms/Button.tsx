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

    ${({ theme }) => theme.utils.applyHoverTransition()}
`;

const TransparentButton = styled.button`
    border-radius: ${({ theme }) => theme.ref.borderRadius['12']};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(${({ theme }) => theme.utils.pxToRem(6)});
    background: rgba(238, 238, 238, 0.2);
    padding: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(216)};
    height: ${({ theme }) => theme.utils.pxToRem(48)};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
    cursor: pointer;

    ${({ theme }) => theme.utils.applyHoverTransition()}
`;

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    config: {
        variant: 'rounded-icon-button' | 'transparent-button';
    };
}

export default function Button({ children, config, ...props }: ButtonProps) {
    const { variant } = config;

    return (
        <>
            {variant === 'rounded-icon-button' && <RoundedIconButton {...props}>{children}</RoundedIconButton>}
            {variant === 'transparent-button' && <TransparentButton {...props}>{children}</TransparentButton>}
        </>
    );
}
