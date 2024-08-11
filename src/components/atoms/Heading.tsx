import styled from 'styled-components';

interface HeadingConfig {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color: 'white';
}

interface HeadingStyledProps {
    config: Pick<HeadingConfig, 'color'>;
}

const Heading1 = styled.h1<HeadingStyledProps>`
    font-size: ${({ theme }) => theme.ref.fontSize['40']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['700']};
`;

const Heading2 = styled.h2<HeadingStyledProps>``;
const Heading3 = styled.h3<HeadingStyledProps>``;
const Heading4 = styled.h4<HeadingStyledProps>``;
const Heading5 = styled.h5<HeadingStyledProps>``;
const Heading6 = styled.h6<HeadingStyledProps>``;

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    config: HeadingConfig;
}

export default function Heading({ children, config, ...props }: HeadingProps) {
    const { variant, color } = config;

    const headingConfig = {
        color,
    };

    return (
        <>
            {variant === 'h1' && (
                <Heading1 config={headingConfig} {...props}>
                    {children}
                </Heading1>
            )}

            {variant === 'h2' && (
                <Heading2 config={headingConfig} {...props}>
                    {children}
                </Heading2>
            )}

            {variant === 'h3' && (
                <Heading3 config={headingConfig} {...props}>
                    {children}
                </Heading3>
            )}

            {variant === 'h4' && (
                <Heading4 config={headingConfig} {...props}>
                    {children}
                </Heading4>
            )}

            {variant === 'h5' && (
                <Heading5 config={headingConfig} {...props}>
                    {children}
                </Heading5>
            )}

            {variant === 'h6' && (
                <Heading6 config={headingConfig} {...props}>
                    {children}
                </Heading6>
            )}
        </>
    );
}
