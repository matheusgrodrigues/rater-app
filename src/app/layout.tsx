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
`;

export default function RootLayout() {
    return (
        <LayoutContainer>
            <Header />

            <LayoutChildContainer data-testid="layout-children-container">
                <Outlet />
            </LayoutChildContainer>

            <Footer />
        </LayoutContainer>
    );
}
