import { render, screen } from '../../../core/utils/test-utils/testing-library';

import Heading from '../../../components/atoms/Heading';

it('Deve renderizar o atom Title', () => {
    render(
        <Heading data-testid="atom-heading" config={{ variant: 'h1', color: 'white' }}>
            text
        </Heading>
    );

    const heading = screen.getByTestId('atom-heading');

    expect(heading).toBeInTheDocument();
});
