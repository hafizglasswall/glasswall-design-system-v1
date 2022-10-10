import { Box, Grid, ListItem, ListItemIcon, ListItemText, SvgIconProps } from "@mui/material";
import { useRouter } from "next/router";
import theme from "../../../../src/theme";
import { FioNavItem } from "../../../FioNavItem";
import { AvatarIcon } from "../../../Icons/AvatarIcon";
import { ConstellationNoBackgroundLogo } from "../../../Icons/ConstellationNoBackgroundLogo";
import { LogoutIcon } from "../../../Icons/LogoutIcon";
import { Heading1 } from "../../Headings";
import { StyledDrawerRoot, StyledLogoutBtn } from "./style";

export interface FioDrawerProps {
    navItems?: NavItem[];
    bottomNavItems?: NavItem[];
    drawerWidth: number;
    Logo: React.ElementType;
    selectedRoute: string;
}

export function FioDrawer({
    navItems = [],
    bottomNavItems = [],
    drawerWidth,
    Logo,
    selectedRoute,
}: FioDrawerProps) {

    return (
        <StyledDrawer drawerWidth={drawerWidth} >
            <Grid container
                alignItems={'center'}
                justifyContent='center'
                columnSpacing={2}
                sx={{
                    background: 'linear-gradient(175.92deg, #392E69 -1.22%, #2C1038 115.83%)',
                    height: '76px'
                }}>
                <Grid item>
                    <ConstellationNoBackgroundLogo sx={{ height: 43, width: 43 }} />
                </Grid>
                <Grid item>
                    <Heading1 variant='h6' fontWeight={'bolder'} sx={{ color: 'white', }}>Constellations</Heading1>
                </Grid>
            </Grid>
            <Grid container pt={4} justifyContent='center'>
                <Grid item>
                    <Logo sx={{ height: 90, width: 162 }} />
                </Grid>
            </Grid>

            <Box component='nav' aria-label={navItems.map(item => item.name).join(' ')}>
                <NavList items={navItems} selectedRoute={selectedRoute} />
            </Box>
            <Box mt={'auto'} pb={2} component='nav' aria-label={navItems.map(item => item.name).join(' ')}>
                <UserListItem />
                <StyledLogoutButton />
            </Box>
        </StyledDrawer>
    );
}

const StyledLogoutButton = () => {
    return (
        <StyledLogoutBtn sx={{ columnGap: 1 }}
            onClick={() => { }}>
            <ListItemIcon sx={{ minWidth: 'unset' }}>
                <LogoutIcon sx={{ width: '15px', height: '14px' }} />
            </ListItemIcon>
            <ListItemText
                primary={'Log out'}
                primaryTypographyProps={{
                    fontSize: '14px',
                }} />
        </StyledLogoutBtn>
    )
}
export interface NavItem {
    name: string;
    secondary?: string;
    Icon: (props: SvgIconProps) => JSX.Element;
    ActiveIcon: (props: SvgIconProps) => JSX.Element;
    route: string;
}

interface NavListProps {
    items: NavItem[];
    selectedRoute: string;
}
export const NavList: React.FC<NavListProps> = ({ items = [], selectedRoute }) => {
    const location = useRouter();
    return (
        <>
            {items.map((navProps) => (
                <FioNavItem
                    key={navProps.name}
                    {...navProps}
                    selected={selectedRoute.includes(navProps.route)}
                    handleNavigation={() => {
                        location.push(navProps.route);
                    }}
                />
            ))}
        </>
    )
}


interface StyledDrawerProps {
    children: React.ReactNode;
    drawerWidth: number;
}
const StyledDrawer = ({ children, drawerWidth }: StyledDrawerProps) => {
    return (
        <StyledDrawerRoot
            drawerWidth={drawerWidth}
            variant="permanent"
            theme={theme} >
            {children}
        </StyledDrawerRoot>
    );
};

const UserListItem = () => {
    return (
        <ListItem sx={{
            pl: 6,
        }}
        >
            <ListItemIcon>
                <AvatarIcon sx={{ width: '40px', height: '40px' }} />
            </ListItemIcon>
            <ListItemText
                primary='John Doe'
                secondary='jdoe@glasswall.com'
                primaryTypographyProps={
                    {
                        variant: 'body1',
                        color: '#F7F9FC',
                    }
                }
                secondaryTypographyProps={
                    {
                        variant: 'caption',
                        color: '#F7F9FC',
                        sx: {
                            opacity: 0.7
                        }
                    }
                }
            />
        </ListItem>
    )
}