import styled from 'styled-components';

import BulletDivider from '../atoms/BulletDivider';
import Strong from '../atoms/Strong';

const SpecDuratCatYearStyled = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

interface SpecDuratCatYearProps {
    config: {
        duratLabel: string;
        yearLabel: string;
        catLabel: string;
    };
}

export default function SpecDuratCatYear({ config }: SpecDuratCatYearProps) {
    const { duratLabel, yearLabel, catLabel } = config;

    return (
        <SpecDuratCatYearStyled>
            <Strong
                config={{
                    fontWeight: 600,
                    label: duratLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />

            <BulletDivider />

            <Strong
                config={{
                    fontWeight: 600,
                    label: catLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />

            <BulletDivider />

            <Strong
                config={{
                    fontWeight: 600,
                    label: yearLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />
        </SpecDuratCatYearStyled>
    );
}
