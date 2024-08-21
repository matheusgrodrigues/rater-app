import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

interface CarrouselCardMovieSkeletonProps extends CarrouselCardMovieSkeletonCardProps {}

export default function CarrouselCardMovieSkeleton({ inline }: CarrouselCardMovieSkeletonProps) {
    return (
        <CarrouselCardMovieSkeletonContainer inline={inline}>
            <CarrouselCardMovieSkeletonCard inline={inline}>
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

interface CarrouselCardMovieSkeletonContainerProps extends CarrouselCardMovieSkeletonCardProps {}

const CarrouselCardMovieSkeletonContainer = styled.div<CarrouselCardMovieSkeletonContainerProps>`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    ${({ theme }) =>
        theme.utils.screen('lg', `max-width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(786)};`)}

    ${({ theme, inline }) => inline && `max-width: ${theme.ref.breakpoint['2xl']} !important; height: auto !important;`}
`;

interface CarrouselCardMovieSkeletonCardProps {
    inline?: boolean | undefined;
}

const CarrouselCardMovieSkeletonCard = styled.div<CarrouselCardMovieSkeletonCardProps>`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}

    flex-direction: row;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};

    ${({ theme }) => theme.utils.screen('lg', `flex-direction: column; gap: 0;`)}

    ${({ theme, inline }) =>
        theme.utils.screen(
            'lg',
            `flex-direction: column; ${inline ? `gap: ${theme.ref.spacing['12']} !important;` : ''};`
        )}


    ${({ inline, theme }) => (inline ? `flex-direction: row !important; gap: ${theme.ref.spacing['8']};` : '')}
`;
