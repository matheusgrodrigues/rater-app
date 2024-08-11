import React from 'react';
import styled from 'styled-components';
import Icon, { IconType } from './Icon';

const BadgeStyled = styled.div`
    width: 167px;
    height: 36px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(${({ theme }) => theme.utils.pxToRem(6)});
    background: rgba(238, 238, 238, 0.2);
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
