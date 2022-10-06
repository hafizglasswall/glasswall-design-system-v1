import { SvgIcon, SvgIconProps } from "@mui/material"

export const AvatarIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect y="1" width="40" height="40" rx="20" fill="url(#paint0_linear_2203_35538)" />
            <path opacity="0.5" d="M20 21C22.21 21 24 19.21 24 17C24 14.79 22.21 13 20 13C17.79 13 16 14.79 16 17C16 19.21 17.79 21 20 21ZM20 23C17.33 23 12 24.34 12 27V29H28V27C28 24.34 22.67 23 20 23Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_2203_35538" x1="-96" y1="-30" x2="50" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.6" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </SvgIcon>

    )
}