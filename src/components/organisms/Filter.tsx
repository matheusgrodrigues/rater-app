import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface FilterRef {}

interface FilterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Filter: React.ForwardRefRenderFunction<FilterRef, FilterProps> = (props, ref) => {
    return (
        <FilterStyled data-testid="organism-filter" {...props}>
            Filter
        </FilterStyled>
    );
};

export default forwardRef(Filter);

const FilterStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(251)};
    width: ${({ theme }) => theme.utils.pxToRem(377)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    padding: ${({ theme }) => theme.ref.padding['12']};
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    position: absolute;
    top: ${({ theme }) => theme.utils.pxToRem(56)};
    z-index: 99;
`;
