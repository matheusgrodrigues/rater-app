import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <Outlet />

            <Link to={'/'}>Rota com ID</Link>
            <Link to={'/sdaf'}>Rota com ID</Link>
        </>
    );
}
