import Badge from '../../../components/atoms/Badge';
import { render, screen } from '../../../core/utils/test-utils/testing-library';

it('Deve renderizar o atom Badge corretamente', () => {
    render(<Badge data-testid="atom-badge" config={{ label: 'Em destaque', icon: 'fire' }} />);

    const badge = screen.getByTestId('atom-badge');

    expect(badge).toBeInTheDocument();
});
