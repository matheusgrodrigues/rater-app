import { ErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import RootLayout from './layout';

import Paragraph from '../components/atoms/Paragraph';
import Heading from '../components/atoms/Heading';
import Icon from '../components/atoms/Icon';

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
            </SectionContainer>
        </RootLayout>
    );
}

const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-grow: 1;
    text-align: center;

    ${({ theme }) => theme.utils.container()}

    gap: ${({ theme }) => theme.ref.spacing['12']};
`;
