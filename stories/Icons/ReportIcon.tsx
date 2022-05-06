import * as React from "react"

export const ReportIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g opacity={0.4} filter="url(#a)">
            <path
                d="M30.404 20.588H21.68l5.81 5.81a.59.59 0 0 0 .816.025 8.805 8.805 0 0 0 2.689-5.179c.049-.348-.24-.656-.59-.656Zm-.582-2.382A8.844 8.844 0 0 0 21.618 10a.592.592 0 0 0-.618.596v8.226h8.227a.591.591 0 0 0 .595-.617Zm-10.587 2.382v-8.724c0-.35-.308-.64-.655-.59-4.382.619-7.73 4.446-7.575 9.034.16 4.71 4.217 8.574 8.93 8.515a8.755 8.755 0 0 0 4.973-1.62c.29-.205.31-.633.057-.884l-5.73-5.73Z"
                fill="#fff"
            />
        </g>
        <defs>
            <filter
                id="a"
                x={7}
                y={10}
                width={28}
                height={26.823}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_295_11172"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_295_11172"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

