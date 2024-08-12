import React, { ReactElement, ReactNode } from 'react';
import { RenderOptions, render as testingLibraryRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../config/theme';
import { MemoryRouter } from 'react-router';

interface WrapperProps {
    children: ReactNode;
}

function render(ui: ReactElement, { ...options }: RenderOptions = {}) {
    const wrapper: React.FC<WrapperProps> = ({ children }) => (
        <ThemeProvider theme={defaultTheme}>
            <MemoryRouter>{children}</MemoryRouter>
        </ThemeProvider>
    );

    return testingLibraryRender(ui, { wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
