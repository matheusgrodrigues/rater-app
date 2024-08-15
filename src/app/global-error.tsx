import { ErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import RootLayout from './layout';

export default function GlobalError() {
    const error = useRouteError() as ErrorResponse & { message: string };

    return (
        <RootLayout>
            <SectionContainer>
                <h1>Oops!</h1>
                <p>Um erro inesperado ocorreu.</p>
                <p>
                    <i>
                        {error.statusText || error.message.toLowerCase() === 'not found'
                            ? 'Página não encontrada'
                            : error.message}
                    </i>
                </p>
            </SectionContainer>
        </RootLayout>
    );
}

const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    display: flex;

    ${({ theme }) => theme.utils.container()}
`;
