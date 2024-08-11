import styled from 'styled-components';

import Badge from '../atoms/Badge';

const CardFilmeDestaqueStyled = styled.div`
    width: 100%;
    min-height: ${({ theme }) => theme.utils.pxToRem(284)};
    max-height: ${({ theme }) => theme.utils.pxToRem(826)};
    padding: ${({ theme }) => theme.ref.padding['12']};

    ${({ theme }) => theme.utils.screen('md', `padding: ${theme.ref.padding['48']};`)}

    background: red;
`;

interface CardFilmeDestaqueProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CardFilmeDestaque({ ...props }: CardFilmeDestaqueProps) {
    return (
        <CardFilmeDestaqueStyled {...props}>
            <Badge data-testid="card-filme-destaque-badge">Em destaque</Badge>
        </CardFilmeDestaqueStyled>
    );
}
