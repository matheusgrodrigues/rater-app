import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export default function CarrouselCardActorSkeleton() {
    return (
        <CarrouselCardActorSkeletonContainer>
            <CarrouselCardActorSkeletonCard>
                {[1, 2, 3, 4, 5, 6, 7].map((skeleton) => (
                    <Skeleton
                        highlightColor="#232323"
                        borderRadius="1.5rem"
                        baseColor="#191919"
                        height="100%"
                        width="100%"
                        count={1}
                        style={{ border: '1px solid #232323' }}
                        wrapper={CarrouselCardActorSkeletonCard}
                        key={skeleton}
                    />
                ))}
            </CarrouselCardActorSkeletonCard>
        </CarrouselCardActorSkeletonContainer>
    );
}

const CarrouselCardActorSkeletonContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    ${({ theme }) => `max-width: ${theme.ref.breakpoint['2xl']};`}
`;

const CarrouselCardActorSkeletonCard = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(200)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(268)}; height: ${theme.utils.pxToRem(253)};`)}

    flex-direction: row;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;
