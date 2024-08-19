import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export default function CarrouselCardMovieSkeleton() {
    return (
        <CarrouselCardMovieSkeletonContainer>
            <CarrouselCardMovieSkeletonCard>
                {[1, 2, 3, 4, 5, 6, 7].map((skeleton) => (
                    <Skeleton
                        highlightColor="#232323"
                        borderRadius="1.5rem"
                        baseColor="#191919"
                        height="100%"
                        width="100%"
                        count={1}
                        style={{ border: '1px solid #232323' }}
                        wrapper={CarrouselCardMovieSkeletonCard}
                        key={skeleton}
                    />
                ))}
            </CarrouselCardMovieSkeletonCard>
        </CarrouselCardMovieSkeletonContainer>
    );
}

const CarrouselCardMovieSkeletonContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    ${({ theme }) =>
        theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(786)};`)}
`;

const CarrouselCardMovieSkeletonCard = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}

    flex-direction: row;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};

    ${({ theme }) => theme.utils.screen('lg', `flex-direction: column; gap: 0 !important;`)}
`;
