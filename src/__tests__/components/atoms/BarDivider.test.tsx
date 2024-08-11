import { render, screen } from '../../../core/utils/test-utils/testing-library';

import BarDivider from '../../../components/atoms/BarDivider';

it('Deve renderizar o atom BarDivider corretamente', () => {
    render(<BarDivider data-testid="atom-bar-divider" />);

    const barDivider = screen.getByTestId('atom-bar-divider');

    expect(barDivider).toBeInTheDocument();
});
