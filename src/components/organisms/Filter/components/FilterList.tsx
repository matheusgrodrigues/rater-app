import { forwardRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

import Heading from '../../../atoms/Heading';
import Image from '../../../atoms/Image';
import Badge from '../../../atoms/Badge';

export interface FilterListRef {
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FilterListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FilterList = forwardRef<FilterListRef, FilterListProps>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            setOpenList: setIsOpen,
        }),
        []
    );

    return (
        <>
            {isOpen && (
                <FilterListStyled {...props}>
                    <Heading config={{ fontSize: '12', fontWeight: '500', color: 'secondary-accessible-text-12' }}>
                        Resultados
                    </Heading>

                    <CardMovieContainer>
                        {fake_data.map((data) => (
                            <CardMovieList key={data.id}>
                                <CardMovie>
                                    <Image data-testid="atom-image" src={data.src} />
                                </CardMovie>

                                <CardMovieSpec>
                                    <CardMovieSpecHeader>
                                        <Heading
                                            config={{
                                                fontSize: '12',
                                                fontWeight: '500',
                                                color: 'secondary-accessible-text-12',
                                            }}
                                        >
                                            {data.title}
                                        </Heading>

                                        <CardMovieBadgeOverride
                                            data-testid="card-movie-badge"
                                            config={{
                                                iconSize: 14,
                                                iconColor: 'yellow',
                                                label: `${data.rating}`,
                                                icon: 'star',
                                            }}
                                        />
                                    </CardMovieSpecHeader>
                                </CardMovieSpec>
                            </CardMovieList>
                        ))}
                    </CardMovieContainer>
                </FilterListStyled>
            )}
        </>
    );
});

export default FilterList;

const fake_data = [
    {
        id: 1,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 2,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 3,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 4,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 5,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 6,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
    {
        id: 7,
        src: 'https://image.tmdb.org/t/p/w300/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22',
        title: 'Iron Man',
        rating: 7.2,
    },
];

const FilterListStyled = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(251)};
    width: 100%;
    max-width: ${({ theme }) => theme.utils.pxToRem(377)};

    ${({ theme }) => theme.utils.screen('md', `min-width: ${theme.utils.pxToRem(377)};`)}

    background-color: ${({ theme }) => theme.ref.colors['secondary-background-2']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    padding: ${({ theme }) => theme.ref.padding['12']};
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

const CardMovieContainer = styled.div`
    max-height: ${({ theme }) => theme.utils.pxToRem(251)};
    overflow-y: auto;
`;

const CardMovieList = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};

    border-radius: ${({ theme }) => theme.ref.borderRadius['16']};
    padding: ${({ theme }) => theme.ref.padding['4']};

    transition: background 0.3s ease-out;

    &:hover {
        transition: background 0.3s ease-in;
        background-color: ${({ theme }) => theme.ref.colors['secondary-interactive-3']};
    }
`;

const CardMovie = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(86)};
    min-width: ${({ theme }) => theme.utils.pxToRem(64)};
    max-width: ${({ theme }) => theme.utils.pxToRem(64)};
    border: ${({ theme }) => theme.utils.pxToRem(2)} solid ${({ theme }) => theme.ref.colors['secondary-borders-6']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['12']};
    overflow: hidden;
`;

const CardMovieSpec = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;

const CardMovieSpecHeader = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
`;

const CardMovieBadgeOverride = styled(Badge)`
    background: none;
    height: auto;
    box-shadow: none;

    & > {
        svg {
            width: ${({ theme }) => theme.utils.pxToRem(14)};
            height: ${({ theme }) => theme.utils.pxToRem(14)};
        }
    }

    & > label {
        font-size: ${({ theme }) => theme.ref.fontSize['12']};
    }
`;
