import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CustomSelectOfPaper } from '.';

export default {
    title: 'Components/Select/CustomSelectOfPaper',
    component: CustomSelectOfPaper,
    args: {
        handleReportSelect: (event) => {},
        loadingTitle: 'loading title',
        label: 'testlabel',
        loading: true,
        options: [
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
        handleReportSelect: {
            table: {
                disable: true,
            },
        },
    },
    parameters: { controls: { sort: 'requiredFirst' } },
} as ComponentMeta<typeof CustomSelectOfPaper>;

const Template: ComponentStory<typeof CustomSelectOfPaper> = (args) => (
    <CustomSelectOfPaper {...args} />
);
export const CustomSelectLoaderComp = Template.bind({});
// export const SelectLoader = Template.bind({});
// CustomSelectOfPaper.args = {
    
// };

// CustomSelectOfPaper.play = async ({ args, canvasElement }) => {
//     const canvas = within(canvasElement);

//     const paperElemnt = canvas.getByTestId('paper-element');

//     expect(paperElemnt).toBeInTheDocument();
// };