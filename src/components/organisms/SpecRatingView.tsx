import styled from 'styled-components';

import BarDivider from '../atoms/BarDivider';
import Strong from '../atoms/Strong';
import Icon from '../atoms/Icon';
import React from 'react';

const SpecRatingViewStyled = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const SpecRating = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;

interface SpecRatingViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    config: {
        ratingLabel: string;
        viewLabel: string;
    };
}

export default function SpecRatingView({ config, ...props }: SpecRatingViewProps) {
    const { ratingLabel, viewLabel } = config;
    return (
        <SpecRatingViewStyled {...props}>
            <SpecRating>
                <Icon config={{ color: 'yellow', icon: 'star', size: 20 }} />
                <Strong config={{ fontWeight: 600, label: ratingLabel, color: 'white', size: 20 }} />
            </SpecRating>

            <BarDivider />

            <Strong
                config={{
                    fontWeight: 600,
                    label: viewLabel,
                    color: 'secondary-accessible-text-11',
                    size: 14,
                }}
            />
        </SpecRatingViewStyled>
    );
}
