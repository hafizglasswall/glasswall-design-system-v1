
import { Drawer, ListItemButton, styled, Theme } from '@mui/material';

export const StyledDrawerRoot = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'drawerWidth',
})(
    ({ drawerWidth, theme }: { drawerWidth: number; theme: Theme }) => ({
        flexShrink: 0,
        width: drawerWidth,
        [theme.breakpoints.down('lg')]: {
            width: 0
        },
        '& .MuiDrawer-paper': {
            borderRadius: 0,
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)',
            width: drawerWidth,
            [theme.breakpoints.down('lg')]: {
                width: 0
            },
        },
    })
);

export const StyledLogoutBtn = styled(ListItemButton)({
    marginLeft: '86px',
    marginRight: '64px',
    color: 'white',
    borderRadius: '8px'
})