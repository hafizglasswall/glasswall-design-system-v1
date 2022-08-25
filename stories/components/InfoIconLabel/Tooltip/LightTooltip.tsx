import styled from '@emotion/styled';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
// TODO
// seperate styles from below.
// example borrowed from is https://stackblitz.com/run?file=demo.tsx

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: '#E7F7F3',
        // color: theme.palette.secondary.main,
        // boxShadow: theme.shadows[1],
        fontSize: '1em',
        padding: '1em',
    },
}));
