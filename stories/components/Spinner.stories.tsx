import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {SelectLoading} from './Spinner';

export default {
    title:'Components/Spinner',
    component: SelectLoading
} as ComponentMeta<typeof SelectLoading>;

const Template : ComponentStory<typeof SelectLoading> = (args) => <SelectLoading {...args}/>

export const Spinner = Template.bind({});

Spinner.args ={
    loading: true,
}