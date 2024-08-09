import React from 'react';
import { Outlet } from 'react-router';

import styled from 'styled-components';
import Icon from '../components/atoms/Icon';

const Header = styled.header`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 96px;
    width: 100%;
`;

const HeaderContainer = styled.div`
    ${({ theme }) => theme.utils.container()}
`;

const Logo = styled.img`
    height: 23px;
    width: 86px;

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        height: 35px;
        width: 128px;
        `
        )}
`;

export default function RootLayout() {
    return (
        <>
            <Header data-testid="header">
                <HeaderContainer>
                    <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />
                    <Icon config={{ color: 'white', icon: 'search-icon', size: '24' }} />
                </HeaderContainer>
            </Header>

            <Outlet />
        </>
    );
}
