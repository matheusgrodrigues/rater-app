import { ErrorResponse, useRouteError } from 'react-router-dom';
import RootLayout from './layout';

export default function GlobalError() {
    const error = useRouteError() as ErrorResponse & { message: string };

    // TODO: personalizar estilos da pagina de erro global.

    return (
        <RootLayout>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </RootLayout>
    );
}
