import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';

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

interface FilterListRef {
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FilterList = forwardRef<FilterListRef, FilterListProps>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            setOpenList: setIsOpen,
        }),
        []
    );

    return <>{isOpen && <FilterListStyled {...props}>FilterList</FilterListStyled>}</>;
});

interface FilterSettingsRef {
    setToggleSettings: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterSettingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FilterSettings = forwardRef<FilterSettingsRef, FilterSettingsProps>(({ ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            setToggleSettings: () => setIsOpen((prev) => !prev),
            setIsOpen,
        }),
        []
    );

    return <>{isOpen && <FilterSettingsStyled>FilterSettings</FilterSettingsStyled>}</>;
});

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

const FilterListStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(251)};
    width: 100%;
    max-width: ${({ theme }) => theme.utils.pxToRem(377)};

    ${({ theme }) => theme.utils.screen('md', `min-width: ${theme.utils.pxToRem(377)};`)}

    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    padding: ${({ theme }) => theme.ref.padding['12']};
`;

const FilterSettingsStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(251)};
    width: 100%;
    max-width: ${({ theme }) => theme.utils.pxToRem(377)};

    ${({ theme }) => theme.utils.screen('md', `min-width: ${theme.utils.pxToRem(377)};`)}

    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    padding: ${({ theme }) => theme.ref.padding['12']};
    position: absolute;
    top: 0;
    z-index: 100;
`;
