import React from 'react';
import styled from 'styled-components';
import Icon, { IconType } from './Icon';

interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    config: {
        label: string;
        icon: IconType;
    };
}

export default function Badge({ config, ...props }: BadgeProps) {
    const { label, icon } = config;

    return (
        <BadgeStyled {...props}>
            <Icon strokeWidth={2} config={{ color: 'white', icon, size: 20 }} />
            <BadgeLabel>{label}</BadgeLabel>
        </BadgeStyled>
    );
}

const BadgeStyled = styled.div`
    width: 167px;
    height: 36px;

    ${({ theme }) => theme.utils.applyTransparentBg()}

    border-radius: ${({ theme }) => theme.ref.borderRadius['8']};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const BadgeLabel = styled.label`
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['20']};
`;
