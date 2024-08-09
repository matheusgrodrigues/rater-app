import { Outlet } from 'react-router';

export default function RootLayout() {
    return (
        <>
            <header data-testid="header">
                <div data-testid="header-logo">logo</div>
                header
            </header>

            <Outlet />
        </>
    );
}
