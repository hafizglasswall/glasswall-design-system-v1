import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../src/theme";

interface NavBarHeaderProps {
    headingName: string;
    isHidden: boolean;
    rightButton: 'none' | 'flex';
    isNavOpen: boolean;
    handleRoute: () => void;
}
export function NavBarHeader(props: NavBarHeaderProps) {
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    let displayValue = 'flex';
    if (matches) {

    } else {
        displayValue = props.isHidden && !props.isNavOpen ? 'flex' : 'none';
    }
    return (
        <Toolbar
            component={Grid}
            container
            justifyContent={'space-between'}
            sx={{
                display: displayValue,
                background: 'transparent',
                px: 3,
                pt: {
                    xs: 2,
                    sm: 1
                },
            }}>
            <Grid item >
                <Typography
                    variant="h4"
                    noWrap
                    component="h1"
                    color="secondary.main"
                >
                    {props.headingName}
                </Typography>
            </Grid>
            <Grid item >

                <Button
                    sx={{
                        [theme.breakpoints.down('lg')]: {
                            display: props.rightButton
                        }
                    }}
                    onClick={props.handleRoute}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}>
                    Start cleaning files
                </Button>
            </Grid>
        </Toolbar>
    )
}