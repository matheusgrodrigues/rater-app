import React from 'react';
import styled from 'styled-components';

interface StrongConfig {
    fontWeight: 600;
    label: string;
    color: 'white' | 'secondary-accessible-text-11';
    size: 14 | 20;
}

interface StrongStyledProps {
    config: Omit<StrongConfig, 'label'>;
}

const StrongStyled = styled.strong<StrongStyledProps>`
    font-weight: ${({ config, theme }) => theme.ref.fontWeight[config.fontWeight]};

    font-size: ${({ config, theme }) => theme.ref.fontSize[config.size]};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;

interface StrongProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    config: StrongConfig;
}

export default function Strong({ config, ...props }: StrongProps) {
    const { fontWeight, label, color, size } = config;

    return (
        <StrongStyled
            config={{
                fontWeight,
                color,
                size,
            }}
            {...props}
        >
            {label}
        </StrongStyled>
    );
}
