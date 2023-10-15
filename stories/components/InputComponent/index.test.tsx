import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { InputElement } = composeStories(stories);

it('should check wether the input element is rendered on screen', () => {
    render(<InputElement />);
    const inputBox = screen
        .getByPlaceholderText('Enter job name')
        .getAttribute('placeholder');
    expect(inputBox).toBe('Enter job name');
});

it('should check wether the input value is changing', () => {
    render(<InputElement />);
    const inputBox = screen.getByPlaceholderText(
        'Enter job name'
    ) as HTMLInputElement;
    fireEvent.change(inputBox, { target: { value: 'Hello Test' } });
    expect(inputBox.value).toBe('Hello Test');
});
