import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavBarHeader } from '.';
export default {
    title: 'Constellation/Layout/Header',
    component: NavBarHeader,
    parameters: {
        // More on Story LeftNavBar: https://storybook.js.org/docs/react/configure/story-LeftNavBar
        LeftNavBar: "fullscreen",
    },
} as ComponentMeta<typeof NavBarHeader>;

const Template: ComponentStory<typeof NavBarHeader> = args => <NavBarHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
    headingName: 'Clean files',
    isHidden: false,
    rightButton: 'flex',
    isNavOpen: false,
    handleRoute: () => { }
}