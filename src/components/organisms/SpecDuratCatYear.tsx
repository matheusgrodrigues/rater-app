import styled from 'styled-components';
import Strong from '../atoms/Strong';

const BulletDivider = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(6)};
    width: ${({ theme }) => theme.utils.pxToRem(6)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    border-radius: 100%;
`;

const SpecDuratCatYearStyled = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

export default function SpecDuratCatYear() {
    return (
        <SpecDuratCatYearStyled>
            <Strong
                config={{
                    fontWeight: 600,
                    label: '2h 8m',
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />

            <BulletDivider />

            <Strong
                config={{
                    fontWeight: 600,
                    label: 'Comedy, Action, Adventure, Superhero...',
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />

            <BulletDivider />

            <Strong
                config={{
                    fontWeight: 600,
                    label: '2024',
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />
        </SpecDuratCatYearStyled>
    );
}
