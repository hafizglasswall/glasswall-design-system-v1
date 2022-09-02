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

interface FilmOptionType {
    value: string;
    label: string;
    title: string;
    year: number;
}

interface UrlSelectProps {
    //urlSelectRef: MutableRefObject<HTMLInputElement>;
    ariaLabel: string;
    label: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error: boolean;
    errorMsg: string;
    required: boolean;
    placeholder: string;
    isLoading: boolean;
    // validated: boolean;
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
     * here the id for htmlfor for label and id for input field is added to connect them for accessbility purposes
     */
    const id = useId();
    console.log('URL select', props);
    return (
        <Grid
            container
            component={FormControl}
            required={props.required}
            spacing={1}
            error={props.error}
        >
            <Grid container alignItems="center" item>
                <FormLabel htmlFor={id} component={'label'}>
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
                    // onChange={(_, { label, value }) => {
                    //     console.log('testhafiz  onChange', _, { label, value })
                    //     // props.handleInputChange(value)
                    // }}
                    onInputChange={(event, newVal) => {
                        console.log('testhafiz onInputChange', event, newVal);
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
                                id,
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
