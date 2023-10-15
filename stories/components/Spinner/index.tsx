import { CircularProgress, InputAdornment } from '@mui/material';
import React from 'react';

/**
 * loading users title is applicable only for users select
 * if we are to have loading option on other select, we need to send the appropriate string say what it is for.
 * classic example will be statusIcon component where we pass title to icon
 * @param props
 * @returns
 */
export interface SelectLoadingProps {
    loading: boolean;
    color?: string;
    size?: number;
}

export const SelectLoading: React.FC<SelectLoadingProps> = (props) => {
    if (!props.loading) return null;
    return (
        <InputAdornment position="start">
            <CircularProgress
                data-testid="spinner-element"
                sx={(theme) => {
                    return {
                        color: props.color,
                    };
                }}
                size={props.size || 20}
            />
        </InputAdornment>
    );
};
