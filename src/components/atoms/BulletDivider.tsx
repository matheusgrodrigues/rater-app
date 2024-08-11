import styled from 'styled-components';

const BulletDividerStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(6)};
    width: ${({ theme }) => theme.utils.pxToRem(6)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    border-radius: 100%;
`;

export default function BulletDivider() {
    return <BulletDividerStyled />;
}
