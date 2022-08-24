import { ComponentMeta, ComponentStory } from '@storybook/react';
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
