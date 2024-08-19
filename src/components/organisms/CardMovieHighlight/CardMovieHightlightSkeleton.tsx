import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

export default function CardMovieHighlightSkeleton() {
    return (
        <CardMovieHighlightSkeletonContainer>
            <Skeleton
                highlightColor="#232323"
                borderRadius="1.5rem"
                baseColor="#191919"
                height="100%"
                width="100%"
                count={1}
                style={{ border: '1px solid #232323' }}
            />
        </CardMovieHighlightSkeletonContainer>
    );
}

const CardMovieHighlightSkeletonContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(536)};`)}
    ${({ theme }) => theme.utils.screen('lg', `height: ${theme.utils.pxToRem(836)};`)}
`;
