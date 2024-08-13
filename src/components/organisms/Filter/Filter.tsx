import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

import FilterList, { FilterListRef } from './FilterList';
import FilterSettings, { FilterSettingsRef } from './FilterSettings';

export interface FilterRef {
    setToggleSettings: () => void;
    setOpenSettings: (state: boolean) => void;
    setOpenList: (state: boolean) => void;
}

interface FilterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Filter: React.ForwardRefRenderFunction<FilterRef, FilterProps> = (props, ref) => {
    const filterSettingsRef = useRef<FilterSettingsRef>(null);
    const filterListRef = useRef<FilterListRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            setToggleSettings: () => filterSettingsRef.current?.setToggleSettings(),
            setOpenSettings: (state) => filterSettingsRef.current?.setIsOpen(state),
            setOpenList: (state) => filterListRef.current?.setOpenList(state),
        }),
        []
    );

    return (
        <FilterStyled {...props}>
            <FilterList ref={filterListRef} />
            <FilterSettings ref={filterSettingsRef} />
        </FilterStyled>
    );
};

export default forwardRef(Filter);

const FilterStyled = styled.div`
    width: 100%;

    ${({ theme }) => theme.utils.screen('md', 'width: auto;')}

    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
    position: absolute;
    top: ${({ theme }) => theme.utils.pxToRem(56)};
    z-index: 99;
`;
