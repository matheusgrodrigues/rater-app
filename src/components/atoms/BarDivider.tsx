import styled from 'styled-components';

const BarDividerStyled = styled.div`
    width: ${({ theme }) => theme.utils.pxToRem(3)};
    height: 60%;
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
`;

export default function BarDivider() {
    return <BarDividerStyled />;
}
