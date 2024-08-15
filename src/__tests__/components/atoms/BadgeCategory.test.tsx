import { render, screen } from '../../../core/utils/test-utils/testing-library';

import BadgeCategory from '../../../components/atoms/BadgeCategory';

it('Deve renderizar o atom BadgeCategory corretamente', () => {
    render(<BadgeCategory data-testid="atom-badge-category">Comédia de amigos</BadgeCategory>);

    const badge = screen.getByTestId('atom-badge-category');

    expect(badge).toBeInTheDocument();
});
