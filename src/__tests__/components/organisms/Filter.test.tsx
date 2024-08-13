import React from 'react';
import { render, screen, waitFor } from '../../../core/utils/test-utils/testing-library';
import Filter, { FilterRef } from '../../../components/organisms/Filter';

describe('Deve renderizar o Filter corretamente', () => {
    it('Deve renderizar o Filter', async () => {
        render(<Filter data-testid="organism-filter" />);

        expect(screen.getByTestId('organism-filter')).toBeInTheDocument();
    });
});
