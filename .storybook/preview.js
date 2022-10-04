import '@fontsource/lato';
import { ThemeProvider } from '@mui/material/styles';
import * as NextImage from 'next/image';
import theme from '../src/theme';
import '../styles/globals.css';
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
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
        expanded: false,
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
