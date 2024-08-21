import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

export default function CarrouselCategorySkeleton() {
    return (
        <CarrouselCategorySkeletonContainer>
            <Skeleton
                highlightColor="#232323"
                borderRadius="1.5rem"
                baseColor="#191919"
                height="100%"
                width="100%"
                count={1}
                style={{ border: '1px solid #232323' }}
                wrapper={CarrouselCategorySkeletonContainer}
            />
        </CarrouselCategorySkeletonContainer>
    );
}

const CarrouselCategorySkeletonContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.utils.pxToRem(20)};

    ${({ theme }) => theme.utils.screen('md', `height: ${theme.utils.pxToRem(76)};`)}

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
