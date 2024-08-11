import styled from 'styled-components';

interface HeadingConfig {
    variant: 'h1';
    color: 'white';
}

interface HeadingStyledProps {
    config: Pick<HeadingConfig, 'color'>;
}

const Heading1 = styled.h1<HeadingStyledProps>`
    font-size: ${({ theme }) => theme.ref.fontSize['40']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['700']};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;

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
        </>
    );
}
