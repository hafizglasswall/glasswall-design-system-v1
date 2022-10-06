import { InfoOutlined } from '@mui/icons-material';
import {
    FormControl, FormHelperText,
    FormLabel,
    Grid,
    OutlinedInput
} from '@mui/material';
import { useId } from 'react';
import { LightTooltip } from '../InfoIconLabel/Tooltip/LightTooltip';

export interface FormItemProps {
    label: string;
    ariaLabel: string;
    tooltipTitle: string;
    tooltipButtonTitle: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required: boolean;
    placeholder: string;
    error: boolean;
    errorMsg: string;
    size?: 'small' | 'medium';
    disabled: boolean;
}
export const FormInput: React.FC<FormItemProps> = (props) => {
    /**
     * to say the label is for an input field, they need to be connected by for and id attribute
     * here the id for htmlfor for label and id for input field is added to connect them for accessbility purposes
     */
    const id = useId();
    return (
        <Grid
            data-testid="inputElement"
            container
            component={FormControl}
            required={props.required}
            spacing={1}
            error={props.error}
        >
            <Grid container alignItems="center" item>
                <FormLabel
                    component={'label'}
                    aria-label={props.ariaLabel}
                    htmlFor={id}
                >
                    {props.label}
                </FormLabel>
                <FormTooltip
                    tooltipTitle={props.tooltipTitle}
                    tooltipButtonTitle={props.tooltipButtonTitle}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <OutlinedInput
                    inputProps={{
                        autoComplete: 'off'
                    }}
                    disabled={props.disabled}
                    name={props.label}
                    required={true}
                    id={id}
                    value={props.value}
                    fullWidth
                    size={props.size}
                    placeholder={props.placeholder}
                    onChange={props.handleInputChange}
                />
            </Grid>
            {props.error && (
                <Grid item xs={12}>
                    <FormHelperText color="error" error={true}>
                        {props.errorMsg}
                    </FormHelperText>
                </Grid>
            )}
        </Grid>
    );
};

interface FormTooltipProps {
    tooltipTitle: string;
    tooltipButtonTitle: string;
}
const FormTooltip: React.FC<FormTooltipProps> = (props) => {
    return (
        <LightTooltip title={props.tooltipTitle} placement="right" arrow={true}>
            <InfoOutlined
                titleAccess={props.tooltipButtonTitle}
                sx={{
                    color: 'secondary.light',
                    ml: '0.3em',
                }}
            />
        </LightTooltip>
    );
};
