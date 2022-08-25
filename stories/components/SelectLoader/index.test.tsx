import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { SelectLoader } = composeStories(stories);

it('should test wether the Paper and spinner component is rendered when loading flag is true', () => {
    render(<SelectLoader />);

    const PaperElement = screen.getByTestId('paper-element');
    const SpinnerElement = screen.getByTestId('spinner-element');
    expect(PaperElement).toBeInTheDocument();
    expect(SpinnerElement).toBeInTheDocument();
});

it('should test wether the Paper component is rendered and spinner is not rendered when flag is false', () => {
    render(<SelectLoader loading={false} />);

    const PaperElement = screen.getByTestId('paper-element');
    const SpinnerElement = screen.queryByTestId('spinner-element');
    expect(PaperElement).toBeInTheDocument();
    expect(SpinnerElement).toBeNull();
});

it('should render 4 options in select dropdown', () => {
    render(<SelectLoader loading={false} />);
    const selectOptionLength = screen.getAllByRole('option').length;
    expect(selectOptionLength).toBe(4);
});
