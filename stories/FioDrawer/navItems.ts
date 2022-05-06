import { DashboardIcon } from "../Icons/DashboardIcon";

interface NavItem {
    name: string;
    Icon: React.ElementType;
    route: string;
}

export const navItems: NavItem[] = [
    {
        name: 'Dashboard',
        Icon: DashboardIcon,
        route: '/dashboard',
    },
    {
        name: 'Clean Files',
        Icon: DashboardIcon,
        route: '/clean-files',
    },
    {
        name: 'View Reports',
        Icon: DashboardIcon,
        route: '/view-reports',
    },
    {
        name: 'Get Help',
        Icon: DashboardIcon,
        route: '/get-help',
    },
];

export const bottomNavItems: NavItem[] = [
    {
        name: 'Settings',
        Icon: DashboardIcon,
        route: '/settings',
    },
    {
        name: 'About',
        Icon: DashboardIcon,
        route: '/about',
    },
];