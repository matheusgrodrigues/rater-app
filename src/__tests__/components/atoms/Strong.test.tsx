import { render, screen } from '../../../core/utils/test-utils/testing-library';

import Strong from '../../../components/atoms/Strong';

it('Deve renderizar o atom Strong corretamente', () => {
    render(
        <Strong
            data-testid="atom-strong"
            config={{
                fontWeight: 600,
                label: '2h 8m',
                color: 'secondary-accessible-text-11',
                size: 14,
            }}
        />
    );

    const strong = screen.getByTestId('atom-strong');

    expect(strong).toBeInTheDocument();
});
