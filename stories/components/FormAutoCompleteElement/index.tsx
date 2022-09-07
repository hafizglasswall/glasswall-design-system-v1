import { Done } from '@mui/icons-material';
import {
    Autocomplete,
    Box,
    createFilterOptions,
    FormControl,
    FormControlProps,
    FormHelperText,
    FormLabel,
    Grid,
    TextField,
} from '@mui/material';
import { MutableRefObject, useId } from 'react';

export interface FilmOptionType {
    label: string;
    value: string;
    title?: string;
    year?: number;
}

export interface UrlSelectProps {
    ariaLabel: string;
    label: string;
    handleInputChange: (val: string) => void;
    value: string;
    error: boolean;
    errorMsg: string;
    required: boolean;
    placeholder: string;
    isLoading: boolean;
    options: UrlSelectOption[];
}
interface UrlSelectOption {
    label: string;
    value: string;
}
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: FilmOptionType) => option.label,
});
/**
 * for auto complete, we would like to use the following
 * Creatable autocomplete
 * use react hook form
 * reference https://blog.logrocket.com/using-material-ui-with-react-hook-form/
 * @param props
 * @returns
 */
export const AutoCompleteComponent: React.FC<UrlSelectProps> = (props) => {
    /**
     * to say the label is for an input field, they need to be connected by for and id attribute
     * here the id for htmlfor for label and id for input field is added to connect them for accessability purposes
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
                <FormLabel htmlFor={id} aria-label={props.ariaLabel}>
                    {props.label}
                </FormLabel>
            </Grid>

            <Grid item xs={12}>
                <Autocomplete
                    filterOptions={filterOptions}
                    id="country-select-demo"
                    options={props.options}
                    autoHighlight
                    getOptionLabel={(option) => option.value}
                    onInputChange={(event, newVal) => {
                        props.handleInputChange(newVal);
                    }}
                    size="small"
                    renderOption={(props, option) => (
                        <Box component="li" {...props}>
                            {option.label}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Paste in a URL or select a location"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
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
