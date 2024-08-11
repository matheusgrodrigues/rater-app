import { render, screen } from '../../../core/utils/test-utils/testing-library';

import BulletDivider from '../../../components/atoms/BulletDivider';

it('Deve renderizar o atom BarDivider corretamente', () => {
    render(<BulletDivider data-testid="atom-bar-divider" />);

    const bulletDivider = screen.getByTestId('atom-bar-divider');

    expect(bulletDivider).toBeInTheDocument();
});
