import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as stories from './index.stories';

const { AutoCompleteElement } = composeStories(stories);

it('should check wether the AutoComplete is rendered on screen', () => {
    render(<AutoCompleteElement />);

    const FormTextBox = screen.getByPlaceholderText(
        'Paste in a URL or select a location'
    );
    expect(FormTextBox).toBeInTheDocument();
});

it('Initial Render: should render form label select correctly', async () => {
    render(<AutoCompleteElement />);
    const selectInput = screen.getByPlaceholderText(
        'Paste in a URL or select a location',
        {
            exact: true,
        }
    );
    fireEvent.mouseDown(selectInput);
    waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    expect(screen.getAllByRole('option').length).toBe(4);
});

it('Success:  when selected the option, should call the handle change event', () => {
    const changeHandler = jest.fn(() => {});

    render(<AutoCompleteElement handleInputChange={changeHandler} />);
    const selectInput = screen.getByPlaceholderText(
        'Paste in a URL or select a location',
        {
            exact: true,
        }
    );
    fireEvent.mouseDown(selectInput);
    const selectedOption = screen.getByRole('option', {
        name: 'display name 2',
    });

    fireEvent.click(selectedOption);
    waitFor(() => {
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });
});
