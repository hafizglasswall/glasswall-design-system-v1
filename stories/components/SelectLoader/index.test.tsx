import { render, screen } from '@testing-library/react';
import { SelectLoader } from './index.stories';

it('should test wether the Paper component is rendered or not', () => {
    render(
        <SelectLoader
            loadingTitle={''}
            label={''}
            users={[]}
            value={''}
            loading={true}
        />
    );

    const PaperElement = screen.getByTestId('paper-element');

    expect(PaperElement).toBeInTheDocument();
});
