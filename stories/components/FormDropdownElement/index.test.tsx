import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { FormDropdownElement } = composeStories(stories);

it('should check wether the Form Dropdown is rendered on screen', () => {
    render(<FormDropdownElement />);

    const FormTextBox = screen.getByText('Select source container');
    expect(FormTextBox).toBeInTheDocument();
});

it('should check wether the input value is changing', async () => {
    const changeHandler = jest.fn().mockImplementation(() => {
        console.log('changeHandler mock triggered');
    });
    render(<FormDropdownElement handleInputChange={changeHandler} />);

    // const selectButton = getByRole('button');
    // expect(selectButton).not.toBeNull();
    // await fireEvent.click(selectButton);
    // getByText(/intel files/i);
    //   render(<FormDropdownElement />);

    const inputElement = screen.getByLabelText('Source container', {
        selector: 'input',
        exact: false,
    });
    screen.debug(inputElement);
    fireEvent.click(inputElement);
    const listbox = screen.getByRole('listbox');
});
