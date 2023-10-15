import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as stories from './index.stories';

const { LabelledFormSelect } = composeStories(stories);

it('should check wether the Form Dropdown is rendered on screen', () => {
    render(<LabelledFormSelect />);

    const FormTextBox = screen.getByText('Select source container');
    expect(FormTextBox).toBeInTheDocument();
});

it('Initial Render: should render form label select correctly', async () => {
    render(<LabelledFormSelect isLoading={false} />);
    const selectInput = screen.getByText('Select source container', {
        exact: true,
    });
    fireEvent.mouseDown(selectInput);

    waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    expect(screen.getAllByRole('option').length).toBe(3);
});

it('Loading: should show loader when loading and input should be disabled', () => {
    render(<LabelledFormSelect />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
});

it('Loading: Loader should hidden', () => {
    render(<LabelledFormSelect isLoading={false} />);
    const spinner = screen.queryByRole('progressbar');
    expect(spinner).toBeNull();
});

it('Success:  when clicked on the option, should call the handle change event', () => {
    const changeHandler = jest.fn().mockImplementation(() => {});

    render(
        <LabelledFormSelect
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
