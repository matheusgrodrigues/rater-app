import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';

export interface FilterRef {
    setOpenSettings: (state: boolean) => void;
    setToggleFilter: () => void;
    setOpenList: (state: boolean) => void;
}

interface FilterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Filter: React.ForwardRefRenderFunction<FilterRef, FilterProps> = (props, ref) => {
    const [openFilter, setOpenFilter] = useState(false);

    const filterSettingsRef = useRef<FilterSettingsRef>(null);
    const filterListRef = useRef<FilterListRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            setOpenSettings: (state) => filterSettingsRef.current?.setOpenSettings(state),
            setToggleFilter: () => setOpenFilter((prev) => !prev),
            setOpenList: (state) => filterListRef.current?.setOpenList(state),
        }),
        []
    );

    return (
        <>
            {openFilter && (
                <FilterStyled {...props}>
                    <FilterList ref={filterListRef} />
                    <FilterSettings ref={filterSettingsRef} />
                </FilterStyled>
            )}
        </>
    );
};

interface FilterListRef {
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FilterList = forwardRef<FilterListRef, FilterListProps>(({ ...rest }, ref) => {
    const [openList, setOpenList] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            setOpenList,
        }),
        []
    );

    return <div {...rest}>{openList && <>FilterList</>}</div>;
});

interface FilterSettingsRef {
    setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterSettingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FilterSettings = forwardRef<FilterSettingsRef, FilterSettingsProps>(({ ...rest }, ref) => {
    const [openSettings, setOpenSettings] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            setOpenSettings,
        }),
        []
    );

    return <div {...rest}>{openSettings && <>FilterSettings</>}</div>;
});

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
