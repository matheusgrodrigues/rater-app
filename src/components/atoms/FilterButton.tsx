import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from './Button';
import Icon from './Icon';

export interface FilterButtonRef {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface FilterButtonProps extends Omit<ButtonProps, 'children' | 'config' | 'ref'> {}

const FilterButton: React.ForwardRefRenderFunction<FilterButtonRef, FilterButtonProps> = (props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(
        ref,
        () => ({
            setCount,
        }),
        []
    );

    return (
        <ButtonOverride config={{ variant: 'rounded-icon-button' }} {...props}>
            {count > 0 && (
                <Counter>
                    {count <= 9 ? (
                        <span>{count}</span>
                    ) : count > 9 ? (
                        <span>
                            {9} <span>+</span>
                        </span>
                    ) : (
                        <></>
                    )}
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
    top: -${({ theme }) => theme.utils.pxToRem(6)};
    left: 0;
    font-weight: ${({ theme }) => theme.ref.fontWeight['600']};
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    justify-content: center;
    align-items: center;
    display: flex;

    & > span > span {
        position: absolute;
        top: -${({ theme }) => theme.utils.pxToRem(8)};
        right: -${({ theme }) => theme.utils.pxToRem(2)};
    }
`;

const ButtonOverride = styled(Button)`
    position: relative;
`;
