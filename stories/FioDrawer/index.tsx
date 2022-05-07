import { List } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FioNavItem } from '../FioNavItem';
import { StyledDrawerRoot } from './style';

export interface FioDrawerProps {
    navItems?: NavItem[];
    bottomNavItems?: NavItem[];
    drawerWidth: number;
    Logo: React.ElementType;
}

export const FioDrawer = ({
    navItems = [],
    bottomNavItems = [],
    drawerWidth,
    Logo,
}: FioDrawerProps) => {
    return (
        <StyledDrawer drawerWidth={drawerWidth}>
            <Box m={8}>
                <Logo />
            </Box>
            <List>
                <NavList items={navItems} />
            </List>
            <List sx={{ mt: 'auto' }}>
                <NavList items={bottomNavItems} />
            </List>
        </StyledDrawer>
    );
};

export interface NavItem {
    name: string;
    Icon: React.ElementType;
    route: string;
}
const NavList = ({ items = [] }: { items: NavItem[] }) => {
    return (
        <>
            {items.map((navProps, index) => (
                <FioNavItem
                    key={navProps.name}
                    {...navProps}
                    selected={index === 1}
                    handleNavigation={() => {
                        console.log('handle navigation');
                    }}
                />
            ))}
        </>
    );
};
interface StyledDrawerProps {
    children: React.ReactNode;
    drawerWidth: number;
}
const StyledDrawer = ({ children, drawerWidth }: StyledDrawerProps) => {
    return (
        <StyledDrawerRoot drawerWidth={drawerWidth} variant="permanent">
            {children}
        </StyledDrawerRoot>
    );
};
