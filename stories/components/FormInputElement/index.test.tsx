import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { FormInputElement } = composeStories(stories);

it('should check wether the Form Input Item is rendered on screen', () => {
    render(<FormInputElement />);

    const FormTextBox = screen.getByRole('textbox', { name: /Job name/i });
    expect(FormTextBox).toBeInTheDocument();
});

it('should check wether the input value is changing', () => {
    render(<FormInputElement />);
    const inputBox = screen.getByPlaceholderText(
        'Enter job name'
    ) as HTMLInputElement;
    fireEvent.change(inputBox, { target: { value: 'Hello Test' } });
    expect(inputBox.value).toBe('Hello Test');
});
