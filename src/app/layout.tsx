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

const Form = styled.form`
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing[12]};
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    border-radius: 100%;

    height: ${({ theme }) => theme.utils.pxToRem(40)};
    width: ${({ theme }) => theme.utils.pxToRem(40)};

    justify-content: center;
    align-items: center;
    display: flex;

    cursor: pointer;
`;

export default function RootLayout() {
    return (
        <>
            <Header data-testid="header">
                <HeaderContainer>
                    <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />

                    <Form data-testid="header-form-search">
                        <Button data-testid="header-form-search-btn-search">
                            <Icon config={{ color: 'white', icon: 'search-icon', size: '24' }} />
                        </Button>
                        <Button data-testid="header-form-search-btn-filter">
                            <Icon config={{ color: 'white', icon: 'filter-icon', size: '24' }} />
                        </Button>
                    </Form>
                </HeaderContainer>
            </Header>

            <Outlet />
        </>
    );
}
