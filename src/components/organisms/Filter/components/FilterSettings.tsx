import { forwardRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

export interface FilterSettingsRef {
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

export default FilterSettings;

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
