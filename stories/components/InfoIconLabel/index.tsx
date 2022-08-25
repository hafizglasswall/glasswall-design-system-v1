import { InfoOutlined } from '@mui/icons-material';
import { Grid, FormLabel } from '@mui/material';
import { FormControlProps } from '@mui/material/FormControl';
import React from 'react';
import { LightTooltip } from './Tooltip/LightTooltip';

export interface FormItemProps extends FormControlProps {
    label: string;
    tooltipTitle: string;
}

export const InfoIconLabel: React.FC<FormItemProps> = (props) => {
    return (
        <Grid data-testid="infolabel" container alignItems="center" item>
            <FormLabel data-testid="label" component={'label'}>
                {props.label}
            </FormLabel>
            <FormTooltip tooltipTitle={props.tooltipTitle} />
        </Grid>
    );
};

interface FormTooltipProps {
    tooltipTitle: string;
}
const FormTooltip: React.FC<FormTooltipProps> = (props) => {
    return (
        <LightTooltip title={props.tooltipTitle} placement="right" arrow={true}>
            <InfoOutlined
                data-testid="tooltip"
                sx={{
                    ml: '0.3em',
                }}

                // sx={(theme) => {
                //     console.log({ theme });
                //     return {
                //         ml: '0.3em',
                //         color: theme.palette.secondary.light,
                //     };
                // }}
            />
        </LightTooltip>
    );
};
