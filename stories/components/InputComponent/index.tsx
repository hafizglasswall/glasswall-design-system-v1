import { FormControlProps, Grid, OutlinedInput } from '@mui/material';
import React from 'react';

export interface InputComponentProps {
    /**
     * Label text value
     */
    label: string;
    /**
     * Value for the input element
     */
    value: string;
    /**
     * Placeholder value
     */
    placeholder: string;

    /**
     * Input element size
     */
    size?: 'small' | 'medium';
    /**
     * Disable the input element defaulted to false
     **/
    disabled: boolean;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputComponent: React.FC<InputComponentProps> = (props) => {
    return (
        <Grid item xs={12} md={6}>
            <OutlinedInput
                disabled={props.disabled}
                name={props.label}
                value={props.value}
                fullWidth
                size={props.size}
                placeholder={props.placeholder}
                onChange={props.handleInputChange}
            />
        </Grid>
    );
};
