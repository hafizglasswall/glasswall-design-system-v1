import { Search } from '@mui/icons-material';
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Pagination,
    Paper,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { SelectLoading } from '../Spinner/';

/**
 * here its string for a reason, you may have failures in enumToArrOfObject function.
 * test needed for enumToArrOfObject
 */
interface Options {
    name: string;
    value: string | number;
}
interface PaperOfSelectProps {
    loadingTitle: string;
    label: string;
    options: Options[];
    value: string;
    handleReportSelect?: (
        event: SelectChangeEvent<unknown>
    ) => void | undefined;
    loading: boolean;
}
/**
 * MUI select will not work for proper html semantic in this case select semantic.
 * hence we have to use MUI native select.
 * semantics here are important to write appropriate test that satisfies accessiblity
 * uncontrolled and controlled component error
 *      you can either use default value or value in the select component
 *      we dont preserve the state for select at this moment as it doesnt feel like a need
 *      as action of change in select event triggers the filters and thats about it.
 *      if need arises keep localstorage in mind, thats not implemented either.
 * @param props
 * @returns
 */
export const CustomSelectOfPaper: React.FC<PaperOfSelectProps> = (props) => {
    return (
        <Paper
            startAdornment={
                <SelectLoading
                    loading={props.loading}
                    title={props.loadingTitle}
                />
            }
            disabled={props.loading}
            onChange={() => {}}
            native={true}
            id={`select-${props.label}`}
            fullWidth
            component={Select}
            value={props.value}
            size="small"
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderStyle: 'unset',
                },
            }}
        >
            {props.options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </Paper>
    );
};
