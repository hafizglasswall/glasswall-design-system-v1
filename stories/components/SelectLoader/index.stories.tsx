import { SelectChangeEvent } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CustomSelectOfPaper } from '.';
import { Spinner } from '../Spinner/index.stories';

export default {
    title: 'Components/Loader/SelectLoader',
    component: CustomSelectOfPaper,
    args: {
        value: 'All',
    },
} as ComponentMeta<typeof CustomSelectOfPaper>;

const Template: ComponentStory<typeof CustomSelectOfPaper> = (args) => (
    <CustomSelectOfPaper {...args} />
);

export const SelectLoader = Template.bind({});
SelectLoader.args = {
    ...Spinner.args,
    loading: false,
    options: [
        { name: 'All', value: 'All' },
        { name: 'John Doe', value: 'John Doe' },
        { name: 'Harry Foe', value: 'Harry Foe' },
        { name: 'Larry Toe', value: 'Larry Toe' },
    ],
};
