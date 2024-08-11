import React from 'react';
import styled from 'styled-components';

interface ParagraphConfig {
    fontWeight: 600;
    color: 'secondary-accessible-text-12';
    size: 16;
}

interface ParagraphStyledProps {
    config: ParagraphConfig;
}

const ParagraphStyled = styled.p<ParagraphStyledProps>`
    font-weight: ${({ config, theme }) => theme.ref.fontWeight[config.fontWeight]};
    font-size: ${({ config, theme }) => theme.ref.fontSize[config.size]};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;

interface ParagraphProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    config: ParagraphConfig;
}

export default function Paragraph({ children, config, ...props }: ParagraphProps) {
    const { fontWeight, color, size } = config;

    return (
        <ParagraphStyled
            config={{
                fontWeight,
                color,
                size,
            }}
            {...props}
        >
            {children}
        </ParagraphStyled>
    );
}
