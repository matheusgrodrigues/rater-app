import { screen, render } from '../../../core/utils/test-utils/testing-library';

import Input from '../../../components/atoms/Input';

it('Deve renderizar o atom input', () => {
    render(<Input data-testid="atom-input" placeholder="Pesquisar..." type="search" />);

    const input = screen.getByTestId('atom-input');

    expect(input).toBeInTheDocument();
});
