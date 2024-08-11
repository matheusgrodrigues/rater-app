import React from 'react';
import styled from 'styled-components';
import Icon, { IconType } from './Icon';

interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    config: {
        iconColor: 'yellow' | 'white';
        icon: IconType;
        label?: string;
    };
}

export default function Badge({ config, ...props }: BadgeProps) {
    const { iconColor, label, icon } = config;

    return (
        <BadgeStyled label={label} {...props}>
            <Icon strokeWidth={2} config={{ color: iconColor, icon, size: 20 }} />
            {label && <BadgeLabel>{label}</BadgeLabel>}
        </BadgeStyled>
    );
}

interface BadgeStyledProps {
    label?: string;
}

const BadgeStyled = styled.div<BadgeStyledProps>`
    width: max-content;
    height: 36px;

    ${({ theme }) => theme.utils.applyTransparentBg()}

    border-radius: ${({ theme }) => theme.ref.borderRadius['8']};
    padding: 0 ${({ theme }) => theme.ref.padding['8']};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const BadgeLabel = styled.label`
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['20']};
`;
