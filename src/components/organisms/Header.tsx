import styled from 'styled-components';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    padding: ${({ theme }) => theme.ref.padding['24']} 0;
    width: 100%;
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

    ${({ theme }) => theme.utils.screen('md', `padding-right: ${theme.utils.pxToRem(343 / 3)}`)};
`;

const Form = styled.form`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing[12]};
    position: relative;
`;

export default function Header() {
    return (
        <HeaderStyled data-testid="header">
            <HeaderStyledContainer>
                <Logo data-testid="header-logo" src="/logo.svg" alt="Rater App - Logo" />

                <FormContainer>
                    <Form data-testid="header-form-search" onSubmit={(e) => e.preventDefault()}>
                        <Button
                            config={{ variant: 'rounded-icon-button' }}
                            data-testid="header-form-search-btn-search"
                            style={{
                                position: 'absolute',
                                left: '0.25rem',
                            }}
                        >
                            <Icon config={{ color: 'white', icon: 'search-icon', size: '24' }} />
                        </Button>

                        <Input data-testid="header-form-search-input" placeholder="Pesquisar..." type="search" />

                        <Button config={{ variant: 'rounded-icon-button' }} data-testid="header-form-search-btn-filter">
                            <Icon config={{ color: 'white', icon: 'filter-icon', size: '24' }} />
                        </Button>
                    </Form>
                </FormContainer>
            </HeaderStyledContainer>
        </HeaderStyled>
    );
}
