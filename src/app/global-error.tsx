import { ErrorResponse, Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import RootLayout from './layout';

import Paragraph from '../components/atoms/Paragraph';
import Heading from '../components/atoms/Heading';
import Icon from '../components/atoms/Icon';
import Button from '../components/atoms/Button';

export default function GlobalError() {
    const error = useRouteError() as ErrorResponse & { message: string };

    return (
        <RootLayout>
            <SectionContainer>
                <Icon
                    config={{
                        color: 'white',
                        icon: 'film',
                        size: 48,
                    }}
                />

                <Heading config={{ fontWeight: '600', fontSize: '24', color: 'secondary-accessible-text-12' }}>
                    Oops! Um erro inesperado ocorreu.
                </Heading>

                <Paragraph config={{ fontWeight: 400, color: 'secondary-accessible-text-12', size: 24 }}>
                    {error.statusText || error.message.toLowerCase() === 'not found'
                        ? 'Página não encontrada'
                        : error.message}
                </Paragraph>

                <Link to="..">
                    <Button config={{ variant: 'secondary-button' }}>Voltar</Button>
                </Link>
            </SectionContainer>
        </RootLayout>
    );
}

const SectionContainer = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['12']};

    ${({ theme }) => theme.utils.container()}
`;
