import styled from 'styled-components';

import Badge from '../atoms/Badge';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import Strong from '../atoms/Strong';

const CardFilmeDestaqueStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${({ theme }) => theme.utils.pxToRem(284)};
    max-height: ${({ theme }) => theme.utils.pxToRem(826)};
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    background: blue;
`;

const CardFilmeDestaqueContent = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

const CardFilmeDestaqueSpec = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['24']};
`;

const CardFilmeDestaqueSpecRatingViews = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};
`;

const CardFilmeDestaqueSpecRating = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['8']};
`;

const BarDivider = styled.div`
    width: ${({ theme }) => theme.utils.pxToRem(3)};
    height: 60%;
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
`;

const BulletDivider = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(6)};
    width: ${({ theme }) => theme.utils.pxToRem(6)};
    background-color: ${({ theme }) => theme.ref.colors['secondary-accessible-text-11']};
    border-radius: 100%;
`;

const CardFilmeDestaqueSpecDuratCatYear = styled.div`
    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};
`;

interface CardFilmeDestaqueProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CardFilmeDestaque({ ...props }: CardFilmeDestaqueProps) {
    return (
        <CardFilmeDestaqueStyled {...props}>
            <CardFilmeDestaqueContent>
                <Badge
                    data-testid="card-filme-destaque-badge"
                    config={{
                        label: 'Em destaque',
                        icon: 'fire',
                    }}
                />

                <Heading
                    data-testid="card-filme-destaque-title"
                    config={{
                        variant: 'h1',
                        color: 'white',
                    }}
                >
                    Deadpool & Wolverine
                </Heading>

                <CardFilmeDestaqueSpec data-testid="card-filme-destaque-spec">
                    <CardFilmeDestaqueSpecRatingViews>
                        <CardFilmeDestaqueSpecRating>
                            <Icon config={{ color: 'yellow', icon: 'star', size: 20 }} />
                            <Strong config={{ fontWeight: 600, label: '8.2', color: 'white', size: 20 }} />
                        </CardFilmeDestaqueSpecRating>

                        <BarDivider />

                        <Strong
                            config={{
                                fontWeight: 600,
                                label: '120 mil',
                                color: 'secondary-accessible-text-11',
                                size: 14,
                            }}
                        />
                    </CardFilmeDestaqueSpecRatingViews>

                    <CardFilmeDestaqueSpecDuratCatYear>
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
                    </CardFilmeDestaqueSpecDuratCatYear>
                </CardFilmeDestaqueSpec>
            </CardFilmeDestaqueContent>
        </CardFilmeDestaqueStyled>
    );
}
