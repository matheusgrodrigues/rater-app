import { render, screen } from '../../../core/utils/test-utils/testing-library';
import { MemoryRouter } from 'react-router';

import Filter from '../../../components/organisms/Filter/Filter';

describe('Deve renderizar o Filter corretamente', () => {
    it('Deve renderizar o Filter', async () => {
        render(
            <MemoryRouter>
                <Filter data-testid="organism-filter" />
            </MemoryRouter>
        );

        expect(screen.getByTestId('organism-filter')).toBeInTheDocument();
    });
});
