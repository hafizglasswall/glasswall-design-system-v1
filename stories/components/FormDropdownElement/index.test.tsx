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
    const changeHandler = jest.fn().mockImplementation(() => {
        console.log('changeHandler mock triggered');
    });
    // render(<FormDropdownElement handleInputChange={changeHandler} />);
    render(<FormDropdownElement isLoading={false} />);
    screen.getByText('Source container', { exact: true });
    screen.getByText('Select source container', { exact: true });
    const selectInput = screen.getByText('Select source container', { exact: true });
    fireEvent.mouseDown(selectInput);
    waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    screen.getByRole('option', { name: 'front office files' })


    /**
     * should be able to see all the options
     */
    screen.debug()
    return;

});
it("Loading: should show loader when loading and input should be disabled", () => {

})
it("Success:  when clicked on the option, should call the handle change event", () => {

})