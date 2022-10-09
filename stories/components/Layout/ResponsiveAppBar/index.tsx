import { Close, Menu } from "@mui/icons-material";
import { Box, Grid, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, SvgIconProps, Toolbar, useMediaQuery } from "@mui/material";
import { useState } from "react";

import { ConstellationIconWithBackground } from "../../../Icons/ConstellationIconWithBackground";
import { GlasswallLogo } from "../../../Icons/GlasswallLogo";
import { FioAppBar } from "./style";


interface NavItem {
    name: string;
    secondary?: string;
    Icon: (props: SvgIconProps) => JSX.Element;
    ActiveIcon: (props: SvgIconProps) => JSX.Element;
    route: string;
}
export interface ResponsiveAppBarProps {
    drawerWidth: number;
    isOpen: boolean;
    navItem: NavItem[];
    currentRoute: string;
    handleRoute: (route: string) => void;
}
export const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = (props) => {
    const match = useMediaQuery('(min-width:1200px)');
    return (
        <FioAppBar
            position="fixed"
            sx={{
                width: {
                    lg: `calc(100% - ${props.drawerWidth}px)`
                },
                ml: `${props.drawerWidth}px`,
                pt: {
                    lg: 2
                }
            }}
        >
            {!match && <NavBar
                navItem={props.navItem}
                handleRoute={props.handleRoute}
                currentRoute={props.currentRoute}
            />}

            {/* <SmallScreenHeader isOpen={isNavOpen} visible={visible} /> */}
        </FioAppBar>

    )
}

type NavBarProps = Pick<ResponsiveAppBarProps, 'handleRoute' | 'currentRoute' | 'navItem'>;
export const NavBar: React.FC<NavBarProps> = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavBarClose = () => {
        setIsNavOpen(!isNavOpen);
    }
    return (
        <Toolbar
            component={Grid}
            container
            sx={{
                background: 'linear-gradient(90deg, #11497C 0%, #1F8C8C 100%)',
                display: {
                    lg: 'none',
                },
                px: {
                    xs: 0
                },

                minHeight: {
                    xs: 0
                },
                justifyContent: 'space-between',
                // alignItems: 'stretch'
            }}
        >

            <Grid item >
                <Grid container height={60}>
                    <Grid item >
                        <ConstellationIconWithBackground sx={{ width: 60, height: 60 }} />
                    </Grid>
                    <Grid item pt={'5px'}>
                        <GlasswallLogo sx={{ height: 50, width: 130, color: 'white' }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <IconButton
                    onClick={handleNavBarClose}
                    sx={{
                        height: '100%',
                        mr: 2,
                        color: 'white'
                    }}
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                >
                    {isNavOpen ? <Close /> : <Menu />}
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveNavMenu
                    navItem={props.navItem}
                    currentRoute={props.currentRoute}
                    isOpen={isNavOpen}
                    handleNavBarClose={handleNavBarClose}
                    handleRoute={props.handleRoute}
                />
            </Grid>
        </Toolbar>
    )
}
interface ResponsiveNavMenuprops extends NavBarProps {
    isOpen: boolean;
    handleNavBarClose: () => void;
    navItem: NavBarProps['navItem'];
}
function ResponsiveNavMenu(props: ResponsiveNavMenuprops) {

    const handleRoute = (route: string) => {
        handleRoute(route)
        props.handleNavBarClose();
    }
    return (
        <Paper sx={{
            width: '100%',
            background: 'linear-gradient(90deg, #11497C 0%, #1F8C8C 100%)',
            display: props.isOpen ? 'block' : 'none'
        }} >
            <MenuList>
                {
                    props.navItem.map((item) => {
                        const { Icon, ActiveIcon } = item;
                        const isCurrentRoute = props.currentRoute === item.route;

                        return (
                            <MenuItem onClick={() => handleRoute(item.route)} key={item.name}>
                                <ListItemText sx={{
                                    textAlign: 'right',
                                    color: 'white',
                                    pr: isCurrentRoute ? 1 : 0
                                }}>
                                    {item.name}
                                </ListItemText>
                                <ListItemIcon sx={{ pl: 1 }}>
                                    <Box >
                                        {props.currentRoute === item.route ? <ActiveIcon sx={{ width: 40, height: 40 }} /> : <Icon sx={{ width: 50, height: 50, }} />}
                                    </Box>
                                </ListItemIcon>
                            </MenuItem>
                        );
                    })
                }
            </MenuList>
        </Paper>
    );
}