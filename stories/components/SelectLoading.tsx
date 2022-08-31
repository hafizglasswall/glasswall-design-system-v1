import { CircularProgress, InputAdornment } from "@mui/material";

/**
 * loading users title is applicable only for users select
 * if we are to have loading option on other select, we need to send the appropriate string say what it is for.
 * classic example will be statusIcon component where we pass title to icon
 * @param props 
 * @returns 
 */
interface SelectLoadingProps { loading?: boolean; title: string; }

export const SelectLoading: React.FC<SelectLoadingProps> = (props) => {
    if (props.loading === undefined) return null;
    if (props.loading) {
        return (
            <InputAdornment position='start'>
                <CircularProgress title={props.title} sx={(theme) => ({
                    color: theme.palette.primary.light
                })} size={20} />
            </InputAdornment>
        )
    }
    return null;
}