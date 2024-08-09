import { screen, render } from '../../../core/utils/test-utils/testing-library';

import Footer from '../../../components/organisms/Footer';

describe('Deve renderizar o footer, corretamente', () => {
    beforeEach(() => render(<Footer />));

    it('Deve renderizar o footer com o texto de copyright', () => {
        const footer = screen.getByTestId('footer');

        expect(footer).toBeInTheDocument();
        expect(footer).not.toHaveTextContent('');
    });
});
