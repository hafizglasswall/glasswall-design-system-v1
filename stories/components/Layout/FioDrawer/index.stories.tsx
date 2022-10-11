import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FioDrawer, FioDrawerProps, NavItem } from '.';
import { AboutActiveIcon } from '../../../Icons/AboutActiveIcon';
import { AboutIcon } from '../../../Icons/AboutIcon';
import { CleanFilesActiveIcon } from '../../../Icons/CleanFilesActiveIcon';
import { CleanFilesIcon } from '../../../Icons/CleanFilesIcon';
import { DashboardActiveIcon } from '../../../Icons/DashboardActiveIcon';
import { DashboardIcon } from '../../../Icons/DashboardIcon';
import { GlasswallLogo } from '../../../Icons/GlasswallLogo';
import { SettingsActiveIcon } from '../../../Icons/SettingsActiveIcon';
import { SettingsIcon } from '../../../Icons/SettingsIcon';
import { ViewReportsActiveIcon } from '../../../Icons/ViewReportsActiveIcon';
import { ViewReportsIcon } from '../../../Icons/ViewReportsIcon';
export default {
    title: 'Constellation/Layout/FioDrawer',
    component: FioDrawer,
    parameters: {
        // More on Story LeftNavBar: https://storybook.js.org/docs/react/configure/story-LeftNavBar
        LeftNavBar: "fullscreen",
    },
} as ComponentMeta<typeof FioDrawer>;

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
    {
        name: 'Job history',
        Icon: ViewReportsIcon,
        ActiveIcon: ViewReportsActiveIcon,
        route: '/job-history',
    },
    {
        name: 'Settings',
        Icon: SettingsIcon,
        ActiveIcon: SettingsActiveIcon,
        route: '/settings',
    },
    {
        name: 'About',
        Icon: AboutIcon,
        ActiveIcon: AboutActiveIcon,
        route: '/about',
    },
];
const Template: ComponentStory<typeof FioDrawer> = (args: FioDrawerProps) => <FioDrawer {...args} />;
export const Default = Template.bind({});
Default.args = {
    navItems: navItems,
    bottomNavItems: [],
    drawerWidth: 256,
    Logo: GlasswallLogo,
    selectedRoute: 'clean-files'
}