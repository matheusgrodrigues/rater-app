import { render, screen } from '../../../core/utils/test-utils/testing-library';

import Image from '../../../components/atoms/Image';

it('Deve renderizar o atom BarDivider corretamente', () => {
    render(
        <Image data-testid="atom-image" src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />
    );

    const image = screen.getByTestId('atom-image');

    expect(image).toBeInTheDocument();
});
