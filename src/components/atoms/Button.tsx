import styled from 'styled-components';

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

    ${({ theme }) => theme.utils.applyTransparentBg()}

    padding: ${({ theme }) => theme.ref.spacing['12']};
    max-width: ${({ theme }) => theme.utils.pxToRem(139)};
    height: ${({ theme }) => theme.utils.pxToRem(27)};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
    cursor: pointer;
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};

    ${({ theme }) => theme.utils.applyHoverTransition()}

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `  
                max-width: ${theme.utils.pxToRem(216)};
                height: ${theme.utils.pxToRem(48)};
                width: 100%;
                font-size: ${theme.ref.fontSize['20']};

            `
        )}


        & > span {
        white-space: nowrap;
    }
`;
