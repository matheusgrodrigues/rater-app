import { render, screen } from '../../../core/utils/test-utils/testing-library';

import Paragraph from '../../../components/atoms/Paragraph';

it('Deve renderizar o atom Paragraph corretamente', () => {
    render(
        <Paragraph
            data-testid="atom-paragraph"
            config={{
                fontWeight: 600,
                color: 'secondary-accessible-text-12',
                size: 16,
            }}
        >
            text
        </Paragraph>
    );

    const paragraph = screen.getByTestId('atom-paragraph');

    expect(paragraph).toBeInTheDocument();
});
