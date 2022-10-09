import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CleanFilesActiveIcon } from '../../../Icons/CleanFilesActiveIcon';
import { CleanFilesIcon } from '../../../Icons/CleanFilesIcon';
import { DashboardActiveIcon } from '../../../Icons/DashboardActiveIcon';
import { DashboardIcon } from '../../../Icons/DashboardIcon';
// import Task from './Task';
import { SvgIconProps } from '@mui/material';
import { ResponsiveAppBar } from '.';

export default {
    title: 'Constellation/Layout/ResponsiveAppBar',
    component: ResponsiveAppBar,
    parameters: {
        // More on Story LeftNavBar: https://storybook.js.org/docs/react/configure/story-LeftNavBar
        LeftNavBar: "fullscreen",
    },
} as ComponentMeta<typeof ResponsiveAppBar>;

const Template: ComponentStory<typeof ResponsiveAppBar> = args => <ResponsiveAppBar {...args} />;

export const Default = Template.bind({});
interface NavItem {
    name: string;
    secondary?: string;
    Icon: (props: SvgIconProps) => JSX.Element;
    ActiveIcon: (props: SvgIconProps) => JSX.Element;
    route: string;
}
const navItems: NavItem[] = [
    {
        name: 'Dashboard',
        Icon: DashboardIcon,
        ActiveIcon: DashboardActiveIcon,
        route: '/dashboard',
    },
    {
        name: 'Clean files',
        Icon: CleanFilesIcon,
        ActiveIcon: CleanFilesActiveIcon,
        route: '/clean-files',
    },
];
Default.args = {
    drawerWidth: 200,
    isOpen: true,
    navItem: navItems,
    currentRoute: '/clean-files',
    handleRoute: () => { }
}



