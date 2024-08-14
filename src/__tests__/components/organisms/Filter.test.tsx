import { render, screen } from '../../../core/utils/test-utils/testing-library';
import Filter from '../../../components/organisms/Filter/Filter';

describe('Deve renderizar o Filter corretamente', () => {
    it('Deve renderizar o Filter', async () => {
        render(<Filter data-testid="organism-filter" />);

        expect(screen.getByTestId('organism-filter')).toBeInTheDocument();
    });
});
