import { Drawer, styled } from '@mui/material';

export const StyledDrawerRoot = styled(Drawer)(
    ({ drawerWidth }: { drawerWidth: number }) => ({
        flexShrink: 0,
        width: drawerWidth,
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)',
            width: drawerWidth,
        },
    })
);
