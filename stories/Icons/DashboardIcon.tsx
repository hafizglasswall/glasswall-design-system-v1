import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon, SvgIconClasses, SvgIconProps, SxProps, Theme } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import React, { ElementType, ReactNode, SVGProps } from "react";
interface CustomSvgIconProps extends SvgIconProps {
    width: string;
    height: string;
}
export const DashboardIcon = (props: CustomSvgIconProps) => (
    <SvgIcon sx={{ width: props.width, height: props.height }} {...props} style={{
        position: 'relative',
        left: '5px',
        top: '5px'
    }}>
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.38461 0H6.92306C7.68629 0 8.30767 0.621374 8.30767 1.38461V6.92306C8.30767 7.68629 7.68629 8.30767 6.92306 8.30767H1.38461C0.621374 8.30767 0 7.68629 0 6.92306V1.38461C0 0.621374 0.621374 0 1.38461 0ZM11.0769 0H16.6153C17.3786 0 17.9999 0.621374 17.9999 1.38461V6.92306C17.9999 7.68629 17.3786 8.30767 16.6153 8.30767H11.0769C10.3137 8.30767 9.69228 7.68629 9.69228 6.92306V1.38461C9.69228 0.621374 10.3137 0 11.0769 0ZM6.92306 10H1.38461C0.621374 10 0 10.6214 0 11.3846V16.9231C0 17.6863 0.621374 18.3077 1.38461 18.3077H6.92306C7.68629 18.3077 8.30767 17.6863 8.30767 16.9231V11.3846C8.30767 10.6214 7.68629 10 6.92306 10ZM11.0769 9.69233H16.6153C17.3786 9.69233 17.9999 10.3137 17.9999 11.0769V16.6154C17.9999 17.3786 17.3786 18 16.6153 18H11.0769C10.3137 18 9.69228 17.3786 9.69228 16.6154V11.0769C9.69228 10.3137 10.3137 9.69233 11.0769 9.69233Z" fill="white" />
    </SvgIcon>
)