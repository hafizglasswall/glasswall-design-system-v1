import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';
import { CustomSelectOfPaper } from '.';
import { Spinner } from '../Spinner/index.stories';

export default {
    title: 'Components/Loader/SelectLoader',
    component: CustomSelectOfPaper,
    args: {
        loading: false,
        users: [
            { name: 'John Doe', value: 'John Doe ' },
            { name: 'Harry Foe', value: 'Harry Foe' },
            { name: 'Larry Toe', value: 'Larry Toe' },
        ],
    },
    argTypes: {
        users: { if: { arg: 'loading', truthy: false } },
        size: {
            control: { type: 'range', min: 10, max: 100, step: 10 },
            if: { arg: 'loading', truthy: true },
        },
    },
    parameters: { controls: { sort: 'requiredFirst' } },
} as ComponentMeta<typeof CustomSelectOfPaper>;

const Template: ComponentStory<typeof CustomSelectOfPaper> = (args) => (
    <CustomSelectOfPaper {...args} />
);

export const SelectLoader = Template.bind({});
SelectLoader.args = {
    ...Spinner.args,
};

SelectLoader.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const paperElemnt = canvas.getByTestId('paper-element');

    expect(paperElemnt).toBeInTheDocument();
};
