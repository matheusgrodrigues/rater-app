import { screen, render } from '../../../core/utils/test-utils/testing-library';

import FilterButton from '../../../components/atoms/FilterButton';

it('Deve renderizar o Button', () => {
    render(<FilterButton data-testid="atom-filter-button" />);

    const button = screen.getByTestId('atom-filter-button');

    expect(button).toBeInTheDocument();
});
