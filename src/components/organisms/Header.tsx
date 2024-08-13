import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilterButton, { FilterButtonRef } from '../atoms/FilterButton';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

import Filter, { FilterRef } from './Filter';

export default function Header() {
    const filterButtonRef = useRef<FilterButtonRef>(null);
    const filterRef = useRef<FilterRef>(null);

    return (
        <HeaderStyled data-testid="header">
            <HeaderStyledContainer>
                <Link to={{ pathname: '/' }}>
                    <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />
                </Link>

                <FormContainer>
                    <Form data-testid="header-form-search" onSubmit={(e) => e.preventDefault()}>
                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="header-form-search-btn-search"
                            style={{
                                position: 'absolute',
                                left: '0.25rem',
                                zIndex: 1,
                            }}
                        >
                            <Icon config={{ color: 'white', icon: 'search', size: 24 }} />
                        </Button>

                        <Input data-testid="header-form-search-input" placeholder="Pesquisar..." type="search" />

                        <FilterButton data-testid="header-form-search-btn-filter" ref={filterButtonRef} />
                    </Form>

                    <Filter ref={filterRef} />
                </FormContainer>
            </HeaderStyledContainer>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    width: 100%;
    padding-top: ${({ theme }) => theme.ref.padding['24']};
    padding-bottom: ${({ theme }) => theme.ref.padding['16']};

    ${({ theme }) =>
        theme.utils.screen(
            'md',
            `
       max-height: ${theme.utils.pxToRem(96)};
       padding: 0;
        `
        )}
`;

const HeaderStyledContainer = styled.div`
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

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;

    ${({ theme }) => theme.utils.screen('md', `padding-right: ${theme.utils.pxToRem(343 / 2)}`)};

    position: relative;
`;

const Form = styled.form`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing[12]};
    position: relative;
`;
