import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { InfoWithLabel } = composeStories(stories);

it('Should check wether the label and icon is rendered', () => {
    render(<InfoWithLabel />);

    const labelElement = screen.getByTestId('infolabel');

    expect(labelElement).toBeInTheDocument();
});

it('Should check wether the label is changeable', () => {
    render(<InfoWithLabel label="Label changed" />);

    const labelElement = screen.getByTestId('label').textContent;
    expect(labelElement).toEqual('Label changed');
});

it('Should check wether tooltip label is rendering correctly', async () => {
    render(<InfoWithLabel />);
    fireEvent.mouseOver(screen.getByTestId('tooltip'));

    expect(await screen.findByText('Tooltip Title')).toBeInTheDocument();
});
