import { screen, render } from '../../../core/utils/test-utils/testing-library';

import HeadingWithBar from '../../../components/organisms/HeadingWithBar';

describe('Deve renderizar o HeadingWithBar corretamente', () => {
    beforeEach(() =>
        render(
            <HeadingWithBar
                data-testid="title-highlighs-too"
                config={{
                    fontWeight: '600',
                    fontSize: '16',
                    color: 'secondary-accessible-text-12',
                }}
            >
                Destaques também
            </HeadingWithBar>
        )
    );

    it('Deve renderizar o BarDivider', () => {
        const barDivider = screen.getByTestId('bar-divider');
        expect(barDivider).toBeInTheDocument();
    });

    it('Deve renderizar o Heading', () => {
        const heading = screen.getByTestId('title-highlighs-too');
        expect(heading).toBeInTheDocument();
    });
});
