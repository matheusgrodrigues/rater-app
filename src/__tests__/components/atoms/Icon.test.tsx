import { screen, render } from '../../../core/utils/test-utils/testing-library';

import Icon from '../../../components/atoms/Icon';

it('Deve renderizar o atom icon', () => {
    render(<Icon data-testid="atom-icon" config={{ color: 'white', icon: 'search-icon', size: '24' }} />);

    const icon = screen.getByTestId('atom-icon');

    expect(icon).toBeInTheDocument();
});
