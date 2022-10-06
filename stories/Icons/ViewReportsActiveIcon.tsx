import { SvgIcon, SvgIconProps } from '@mui/material';

export const ViewReportsActiveIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            {...props}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="20"
                cy="20"
                r="20"
                fill="url(#paint0_linear_242_14176)"
            />
            <path
                opacity="0.8"
                d="M30.4041 20.5881H21.6802L27.4902 26.398C27.7122 26.62 28.0777 26.6381 28.306 26.423C29.7288 25.0825 30.7074 23.2756 30.9946 21.2443C31.0438 20.8965 30.7552 20.5881 30.4041 20.5881ZM29.8221 18.2057C29.5192 13.8138 26.0096 10.3043 21.6177 10.0013C21.2824 9.97817 21.0001 10.2609 21.0001 10.5969V18.8234H29.2269C29.5629 18.8234 29.8453 18.541 29.8221 18.2057ZM19.2354 20.5881V11.8642C19.2354 11.5131 18.9269 11.2245 18.5795 11.2738C14.1982 11.8929 10.8493 15.7204 11.0052 20.3076C11.1655 25.0186 15.2218 28.8818 19.935 28.8226C21.7879 28.7995 23.5001 28.2024 24.9078 27.2039C25.1982 26.998 25.2174 26.5704 24.9655 26.3186L19.2354 20.5881Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_242_14176"
                    x1="0"
                    y1="22.5"
                    x2="40"
                    y2="22.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5CE2C7" />
                    <stop offset="1" stopColor="#43C2DA" />
                </linearGradient>
            </defs>
        </SvgIcon>
    );
};
