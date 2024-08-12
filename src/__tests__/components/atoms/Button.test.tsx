import { screen, render } from '../../../core/utils/test-utils/testing-library';

import Button from '../../../components/atoms/Button';
import Icon from '../../../components/atoms/Icon';

it('Deve renderizar o Button', () => {
    render(
        <Button data-testid="atom-button" config={{ variant: 'rounded-icon-button' }}>
            <Icon config={{ color: 'white', icon: 'search', size: 24 }} />
        </Button>
    );

    const button = screen.getByTestId('atom-button');

    expect(button).toBeInTheDocument();
});
