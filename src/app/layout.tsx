import { Outlet } from 'react-router';

import styled from 'styled-components';
import Icon from '../components/atoms/Icon';

const Header = styled.header`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    padding: ${({ theme }) => theme.ref.padding['24']} 0;
    width: 100%;
`;

const HeaderContainer = styled.div`
    ${({ theme }) => theme.utils.container()}

    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
        justify-content: space-between;
        flex-direction: row;
        `
        )}
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
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing[12]};
    position: relative;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    height: ${({ theme }) => theme.utils.pxToRem(40)};
    width: ${({ theme }) => theme.utils.pxToRem(40)};
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`;

const Input = styled.input`
    height: ${({ theme }) => theme.utils.pxToRem(48)};
    max-width: ${({ theme }) => theme.utils.pxToRem(283)};
    width: 100%;
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    padding-left: calc(${({ theme }) => theme.ref.padding['12']} + ${({ theme }) => theme.utils.pxToRem(40)});
    padding-right: ${({ theme }) => theme.ref.padding['12']};
    font-size: ${({ theme }) => theme.ref.fontSize['14']};
    outline: none;
    border: none;
    color: ${({ theme }) => theme.ref.colors.white};

    &::placeholder {
        color: ${({ theme }) => theme.ref.colors['secondary-interactive-5']};
    }
`;

export default function RootLayout() {
    return (
        <>
            <Header data-testid="header">
                <HeaderContainer>
                    <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />

                    <Form data-testid="header-form-search" onSubmit={(e) => e.preventDefault()}>
                        <Button
                            data-testid="header-form-search-btn-search"
                            style={{
                                position: 'absolute',
                                left: '0.25rem',
                            }}
                        >
                            <Icon config={{ color: 'white', icon: 'search-icon', size: '24' }} />
                        </Button>

                        <Input data-testid="header-form-search-input" placeholder="Pesquisar..." type="search" />

                        <Button data-testid="header-form-search-btn-filter">
                            <Icon config={{ color: 'white', icon: 'filter-icon', size: '24' }} />
                        </Button>
                    </Form>

                    {/*TODO: ajustar espaçamento com flex-basis e flex-glow, para centralizar o campo de busca na tela, após resolver, remover esta <div /> solta. */}
                    <div />
                </HeaderContainer>
            </Header>

            <Outlet />
        </>
    );
}
