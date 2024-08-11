import React from 'react';
import styled from 'styled-components';

const BadgeStyled = styled.div``;

interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

export default function Badge({ children, ...props }: BadgeProps) {
    return <BadgeStyled {...props}>{children}</BadgeStyled>;
}
