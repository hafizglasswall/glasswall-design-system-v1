import {
    FormControl,
    FormControlProps,
    FormHelperText,
    FormLabel,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import { useId } from 'react';
import { SelectLoading } from '../SelectLoading';

interface SelectOptions {
    label: string;
    value: string;
}

interface FormLabelSelectProps {
    options: SelectOptions[];
    label: string;
    handleInputChange: (event: SelectChangeEvent) => void;
    value: string;
    error: boolean;
    errorMsg: string;
    placeholder: string;
    isLoading: boolean;
    required: boolean;
}
export const FormLabelSelect: React.FC<FormLabelSelectProps> = (props) => {
    /**
     * to say the label is for an input field, they need to be connected by for and id attribute
     * here the id for htmlfor for label and id for input field is added to connect them for accessbility purposes
     */
    const id = useId();
    return (
        <Grid
            container
            component={FormControl}
            required={props.required}
            spacing={1}
            error={props.error}
        >
            <Grid container alignItems="center" item>
                <FormLabel component={'label'} htmlFor={id}>
                    {props.label}
                </FormLabel>
            </Grid>

            <Grid item xs={12} md={6}>
                <Select
                    name={props.label}
                    onChange={props.handleInputChange}
                    displayEmpty
                    disabled={props.isLoading}
                    startAdornment={
                        <Loader containersLoading={props.isLoading} />
                    }
                    inputProps={{ id }}
                    size="small"
                    fullWidth
                    input={<OutlinedInput />}
                    renderValue={(value: SelectOptions['value']) => {
                        if (value) return value;
                        return (
                            <Box color={'text.secondary'} component="span">
                                Select source container
                            </Box>
                        );
                    }}
                >
                    {!props.isLoading &&
                        props.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                </Select>
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

const Loader: React.FC<{
    containersLoading: boolean;
}> = ({ containersLoading }) => {
    if (!containersLoading) return null;
    return <SelectLoading loading={true} title="loading source container" />;
};
