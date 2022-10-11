import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { InlineInputElement } from '.'
export default {
    title: "Components/Form/Inline Input",
    component: InlineInputElement,
    parameters: {
        layout: 'centered'
    }
} as ComponentMeta<typeof InlineInputElement>

const Template: ComponentStory<typeof InlineInputElement> = (args) => {
    return <InlineInputElement {...args} />
}
export const Default = Template.bind({});
Default.args = {
    labelName: 'Ip address',
    placeholder: 'test placeholder'
}
export const Error = Template.bind({});
Error.args = {
    labelName: 'Ip address',
    placeholder: 'test placeholder',
    isError: true,
    errorMessage: 'unkown error',
    outlinedInputProps: {
        error: true
    }
}
export const Loading = Template.bind({});
Loading.args = {
    labelName: 'Ip address',
    placeholder: 'test placeholder',
    isLoading: true,

}