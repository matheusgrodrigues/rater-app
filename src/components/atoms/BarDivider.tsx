import React from 'react';
import styled from 'styled-components';

interface BarDividerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function BarDivider({ ...props }: BarDividerProps) {
    return <BarDividerStyled {...props} />;
}

const BarDividerStyled = styled.div`
    width: ${({ theme }) => theme.utils.pxToRem(3)};
    height: 60%;
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
`;
