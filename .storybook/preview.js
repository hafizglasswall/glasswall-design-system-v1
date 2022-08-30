import "../styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: false
    },
};




export const decorators = [
    (Story) => {
        return (
            <ThemeProvider theme={theme}>
                <div style={{ margin: '5em' }}>
                    <Story />
                </div>
            </ThemeProvider>
        );
    },
  ];