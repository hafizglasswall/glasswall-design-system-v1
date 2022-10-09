import { Backdrop, Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)({
    outline: 'transparent',

    // [`&.${outlinedInputClasses.input}`]: {
    //     outli: "2px solid red"
    // },
})


export const StyledBackdrop = styled(Backdrop)({
    // height: height,
    backgroundColor: "rgb(0 0 0 / 8%)",
    position: "absolute",
    // zIndex: 1,
});

export const StytledSelect = styled(Select)({
    backgroundColor: 'white',
    boxShadow: "0px 18px 69px rgba(0, 0, 0, 0.04), 0px 3.6px 11.2125px rgba(0, 0, 0, 0.02)",

    "& .MuiOutlinedInput-notchedOutline": {
        border: 'none',
    },
    "& .MuiSelect-select": {

        backgroundColor: 'transparent',
        borderRadius: '8px',
        color: 'black'
    },
})