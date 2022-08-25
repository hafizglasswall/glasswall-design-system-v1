import { FormControlProps, Grid, OutlinedInput } from '@mui/material';
import React from 'react';

export interface InputComponentProps extends FormControlProps {
    /**
     * This is the Label text value
     */
    label: string;
    /**
     * This is the Label text value
     */
    value: string;
    placeholder: string;
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

export default InputComponent;
