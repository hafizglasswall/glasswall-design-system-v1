import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../../src/theme';
import { InfoIconLabel } from './index';

export default {
    title: 'Components/Icons/InfoWithLabel',
    component: InfoIconLabel,
    // decorators: [
    //     (Story) => {
    //         return (
    //             <ThemeProvider theme={theme}>
    //                 <Story />
    //             </ThemeProvider>
    //         );
    //     },
    // ],
} as ComponentMeta<typeof InfoIconLabel>;

const Template: ComponentStory<typeof InfoIconLabel> = (args) => (
    <InfoIconLabel {...args} />
);

export const InfoWithLabel = Template.bind({});
InfoWithLabel.args = {
    label: 'Custom label',
    tooltipTitle: 'Tooltip Title',
};

InfoWithLabel.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const infoWithLable = canvas.getByTestId('infolabel');

    expect(infoWithLable).toBeInTheDocument();
};
