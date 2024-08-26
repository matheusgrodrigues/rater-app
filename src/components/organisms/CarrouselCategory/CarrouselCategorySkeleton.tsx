import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

export default function CarrouselCategorySkeleton() {
    return (
        <CarrouselCategorySkeletonContainer>
            {[1, 2, 3, 4, 5, 6, 7].map((skeleton) => (
                <SkeletonOverride
                    highlightColor="#232323"
                    borderRadius="1.5rem"
                    baseColor="#191919"
                    height="100%"
                    width="100%"
                    count={1}
                    style={{ border: '1px solid #232323' }}
                    wrapper={CarrouselCategorySkeletonContainer}
                    key={skeleton}
                />
            ))}
        </CarrouselCategorySkeletonContainer>
    );
}

const CarrouselCategorySkeletonContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.utils.pxToRem(24)};
    position: relative;
    overflow: hidden;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['6']};

    ${({ theme }) => theme.utils.screen('lg', `max-width: ${theme.ref.breakpoint['2xl']}; height: auto`)}
`;

const SkeletonOverride = styled(Skeleton)`
    height: 100%;
    min-width: ${({ theme }) => theme.utils.pxToRem(84)};
    border-radius: ${({ theme }) => theme.ref.borderRadius['99']};
    border: ${({ theme }) => theme.utils.pxToRem(2)} solid ${({ theme }) => theme.ref.colors['secondary-interactive-5']};
    background-color: ${({ theme }) => theme.ref.colors['secondary-background-1']};
`;
