import { render, screen } from '../../../core/utils/test-utils/testing-library';

import Filter from '../../../components/organisms/Filter';

describe('Deve renderizar o Filter, corretamente', () => {
    beforeEach(() => render(<Filter />));
    it('Deve renderizar o Filter', () => {
        const filter = screen.getByTestId('organism-filter');
        expect(filter).toBeInTheDocument();
    });
});
