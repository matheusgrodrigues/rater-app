import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Icon from './Icon';

export interface FilterButtonRef {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface FilterButtonProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const FilterButton: React.ForwardRefRenderFunction<FilterButtonRef, FilterButtonProps> = (props, ref) => {
    const [count, setCount] = useState(1);

    useImperativeHandle(
        ref,
        () => ({
            setCount,
        }),
        []
    );

    return (
        <ButtonOverride config={{ variant: 'rounded-icon-button' }} data-testid="header-form-search-btn-filter">
            {count > 0 && (
                <Counter>
                    <span>{count}</span>
                </Counter>
            )}
            <Icon config={{ color: 'white', icon: 'filter', size: 24 }} />
        </ButtonOverride>
    );
};

export default forwardRef(FilterButton);

const Counter = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(16)};
    width: ${({ theme }) => theme.utils.pxToRem(16)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-solid-9']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['9']};
    position: absolute;
    top: -6px;
    left: 0;
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    justify-content: center;
    align-items: center;
    display: flex;
    padding-right: ${({ theme }) => theme.utils.pxToRem(1)};
`;

const ButtonOverride = styled(Button)`
    position: relative;
`;
