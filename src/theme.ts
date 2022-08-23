import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        gradientn: {
            main: React.CSSProperties['background'];
            light: React.CSSProperties['backgroundColor'];
            progressBar: React.CSSProperties['background'];
        };
    }
    interface ThemeOptions {
        gradientn: {
            main: React.CSSProperties['background'];
            light: React.CSSProperties['backgroundColor']
        };
    }
}




// Create a theme instance.


const colorTheme = {
    gradientn: {
        main: 'linear-gradient(90deg, #60F0C0 0%, #4DD9ED 100%)',
        light: '#B7C0EB'
    },
    palette: {
        common: {
            black: "#000",
            white: "#fff",
            // heading: "#11497C",
            // highlight: "#099E7C"
        },
        background: {
            paper: "#fff",
            default: "#F7F9FC"
        },
        primary: {
            light: 'red',
            main: "#099E7C", //Primary/Green/AA
            contrastText: "#fff",
        },
        /**
         * main: Primary/Blue/Main using for headers
         */
        secondary: {
            main: "#11497C",
            light: '#8086A5', // used as text color also
            dark: "#c51162",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#C22969",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            primary: "#111827",
            secondary: "#8086A5", // placeholder font color
            disabled: "rgba(0, 0, 0, 0.38)",
            // hint: "rgba(0, 0, 0, 0.38)",

        }
    }
}

const fontWeight = {
    fontWeight: 'bolder'
}
const theme = createTheme({
    typography: {
        fontFamily: 'Lato',
        h1: fontWeight,
        h2: fontWeight,
        h3: fontWeight,
        h4: fontWeight,
        h5: fontWeight,
        h6: fontWeight
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: '1px solid #E8E8E8'
                },
                input: {
                    color: colorTheme.palette.secondary.main,
                    '&::placeholder': {
                        color: colorTheme.palette.text.secondary,
                        opacity: 1,
                    },
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red", float: 'left' },
                root: {
                    color: 'black'
                }
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head': {
                        color: colorTheme.palette.secondary.light
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none'
                }
            }
        }
    },
    ...colorTheme
});
export default responsiveFontSizes(theme);



