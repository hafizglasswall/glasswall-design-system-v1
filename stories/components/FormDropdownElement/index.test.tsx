import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as stories from './index.stories';

const { FormDropdownElement } = composeStories(stories);

it('should check wether the Form Dropdown is rendered on screen', () => {
    render(<FormDropdownElement />);

    const FormTextBox = screen.getByText('Select source container');
    expect(FormTextBox).toBeInTheDocument();
});

it('Initial Render: should render form label select correctly', async () => {
    render(<FormDropdownElement isLoading={false} />);
    const selectInput = screen.getByText('Select source container', {
        exact: true,
    });
    fireEvent.mouseDown(selectInput);

    waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    expect(screen.getAllByRole('option').length).toBe(3);
});
it('Loading: should show loader when loading and input should be disabled', () => {});
it('Success:  when clicked on the option, should call the handle change event', () => {
    const changeHandler = jest.fn().mockImplementation(() => {});

    render(
        <FormDropdownElement
            isLoading={false}
            handleInputChange={changeHandler}
        />
    );
    const selectInput = screen.getByText('Select source container', {
        exact: true,
    });
    fireEvent.mouseDown(selectInput);
    const selectedOption = screen.getByRole('option', {
        name: 'front office files',
    });

    fireEvent.click(selectedOption);
    waitFor(() => expect(changeHandler).toHaveBeenCalled());
});
