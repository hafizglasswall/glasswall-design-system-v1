import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {SelectLoading} from '.';
import theme from "../../../src/theme";

export default {
    title:'Components/Loader/Spinner',
    component: SelectLoading,
    argTypes: {
        color: { control: 'color' },
        size: { control: { type: 'range',  min: 10, max: 100, step: 10 }},
      },
    decorators:[
        (Story)=> {
            console.log('Test',{theme})
            // console.log({theme})
            return (
            <ThemeProvider theme={theme}><div style={{ margin :'5em'}}><Story/></div></ThemeProvider>
        )}
    ]
} as ComponentMeta<typeof SelectLoading>;

const Template : ComponentStory<typeof SelectLoading> = (args) => <SelectLoading {...args}/>

export const Spinner = Template.bind({});
Spinner.args ={
    loading: true,
    Title:'Select Loading',
}