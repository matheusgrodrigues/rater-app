import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterStyled data-testid="footer">
            <p>© 2024 Rader. All rights reserved</p>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
    padding: ${({ theme }) => theme.ref.padding['24']} 0;
    width: 100%;
    color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
`;
