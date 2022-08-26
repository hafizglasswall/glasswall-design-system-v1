import { Paper, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { SelectLoading } from '../Spinner/';

/**
 * here its string for a reason, you may have failures in enumToArrOfObject function.
 * test needed for enumToArrOfObject
 */
export interface user {
    name: string;
    value: string | number;
}
export interface PaperOfSelectProps {
    users: user[];
    handleReportSelect?: (
        event: SelectChangeEvent<unknown>
    ) => void | undefined;
    loading: boolean;
    size?: number;
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
                    // title={props.loadingTitle}
                    size={props.size}
                />
            }
            disabled={props.loading}
            onChange={() => {}}
            data-testid="paper-element"
            native={true}
            // id={`select-${props.label}`}
            fullWidth
            component={Select}
            //value={props.value}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderStyle: 'unset',
                },
                height: props.size || 20,
                p: 3,
            }}
        >
            <option value="All">All</option>
            {props.users?.map((option: user) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </Paper>
    );
};
