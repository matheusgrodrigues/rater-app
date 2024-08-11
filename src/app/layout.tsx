import { Outlet } from 'react-router';
import styled from 'styled-components';

import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

const LayoutContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    display: flex;
`;

const LayoutChildContainer = styled.main`
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    padding-top: 0 !important;
`;

interface RootLayoutProps {
    children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <LayoutContainer>
            <Header />

            <LayoutChildContainer data-testid="layout-children-container">
                {children || <Outlet />}
            </LayoutChildContainer>

            <Footer />
        </LayoutContainer>
    );
}
