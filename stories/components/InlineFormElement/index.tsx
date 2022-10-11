import { InfoOutlined } from "@mui/icons-material";
import { Grid, OutlinedInput, OutlinedInputProps, TooltipProps, Typography } from "@mui/material";
import React from "react";
import { LightTooltip } from "../InfoIconLabel/Tooltip/LightTooltip";
import { SelectLoading } from "../SelectLoading";

export interface InlineInputElementProps {
    labelName: string;
    placeholder: string;
    showTooltip: 'block' | 'none';
    TooltipComponent: TooltipProps['title'];
    svgTitle: string;
    outlinedInputProps: OutlinedInputProps;
    isError: boolean;
    errorMessage: string;
    isLoading: boolean;

}
export const InlineInputElement: React.FC<InlineInputElementProps> = (props) => {
    const { TooltipComponent } = props;
    return (
        <Grid container columnSpacing={{ md: 1 }} >
            <Grid item xs={12} md={'auto'}>
                <Grid container sx={{ pt: 1.2 }}>
                    <Grid item>
                        <Typography variant="body2">{props.labelName}</Typography>
                    </Grid>
                    <Grid item display={props.showTooltip}>
                        <UrlIpAddressTooltip TitleComponent={TooltipComponent} titleAccess={props.svgTitle} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <OutlinedInput
                            size="small"
                            placeholder={props.placeholder}
                            fullWidth
                            endAdornment={
                                <SelectLoading
                                    loading={props.isLoading}
                                    title="ip address loading"
                                />
                            }
                            {...props.outlinedInputProps} />
                    </Grid>
                    <Grid item xs={12}>
                        {props.isError && (
                            <ErrorMessage message={props.errorMessage} />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
        <Grid item>
            <Typography variant="body2" color="error">
                {message}
            </Typography>
        </Grid>
    );
};
interface UrlIpAddressTooltipProps {
    titleAccess: string;
    TitleComponent: TooltipProps['title'];

}
const UrlIpAddressTooltip: React.FC<UrlIpAddressTooltipProps> = (props) => {
    const { TitleComponent } = props;
    return (
        <LightTooltip
            title={TitleComponent}
        >
            <InfoOutlined
                titleAccess={props.titleAccess}
                sx={{ ml: 1, color: 'secondary.light' }}
            />
        </LightTooltip>
    );
};