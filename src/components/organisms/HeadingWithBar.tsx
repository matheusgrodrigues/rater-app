import styled from 'styled-components';

import BarDivider from '../atoms/BarDivider';
import Heading, { HeadingProps } from '../atoms/Heading';

interface HeadingWithBarProps extends HeadingProps {}

export default function HeadingWithBar({ children, ...props }: HeadingWithBarProps) {
    return (
        <HeadingWithBarContainer>
            <BarDividerOverride
                data-testid="bar-divider"
                config={{
                    height: 29,
                    width: 4,
                }}
            />
            <HeadingOverride data-testid="heading-divider" {...props}>
                {children}
            </HeadingOverride>
        </HeadingWithBarContainer>
    );
}

const HeadingWithBarContainer = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;

const BarDividerOverride = styled(BarDivider)`
    height: ${({ theme }) => theme.utils.pxToRem(20)};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(29)};`)}
`;

const HeadingOverride = styled(Heading)<HeadingWithBarProps>`
    font-size: ${({ theme }) => theme.ref.fontSize[16]};

    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize[24]};`)}
`;
