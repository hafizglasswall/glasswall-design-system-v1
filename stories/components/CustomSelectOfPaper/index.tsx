import { ExpandMoreOutlined } from "@mui/icons-material";
import { Grid, InputLabel, InputLabelProps, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { SelectLoading } from "../SelectLoading";
import { StytledSelect } from "./style";

interface Options {
    name: string;
    value: string | number;
}
export interface PaperOfSelectProps {
    loadingTitle: string;
    label: string;
    options: Options[];
    value: string;
    handleReportSelect: (event: SelectChangeEvent) => void;
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
        <Grid container alignItems={'baseline'}  >
            <Grid item width={50}>
                <InputLabelTypography htmlFor='select-status'>
                    Status
                </InputLabelTypography>
            </Grid>
            <Grid item xl lg xs>
                <CustomSelect {...props} />
            </Grid>
        </Grid>
    )

}

const CustomSelect: React.FC<PaperOfSelectProps> = (props) => {
    return (
        <StytledSelect
            sx={{
                fontSize: '14px'
            }}

            startAdornment={
                <SelectLoading loading={props.loading} title={props.loadingTitle} />
            }
            disabled={props.loading}
            onChange={props.handleReportSelect.bind(null)}
            id={`select-${props.label}`}
            fullWidth
            value={props.value}
            IconComponent={ExpandMoreOutlined}
            size='small'>
            {props.options.map((option => (
                <MenuItem sx={{ width: '100%' }} key={option.value} value={option.value}>{option.name}</MenuItem>
            )))}
        </StytledSelect>
    )
}
const InputLabelTypography: React.FC<PropsWithChildren<InputLabelProps>> = (props) => {
    return (
        <InputLabel htmlFor="select-status">
            <Typography variant="body2" >
                {props.children}
            </Typography>
        </InputLabel>
    )
}