import {createTheme, Text} from "@mantine/core";

export const theme = createTheme({
    fontFamily: 'Manrope, sans-serif',
    fontFamilyMonospace: 'Manrope, Monaco, Courier, monospace',
    headings: { fontFamily: 'Manrope, Greycliff CF, sans-serif' },
    components: {
        Text: Text.extend({
            defaultProps: {
                fw: 600
            }
        }),
    },

    colors: {
        ratio: ['#AE650B'],
        primary: ['#ffa200', '#FFAD2A', '#FFBA54', '#FFC87E', '#FFD8A8', '#FFEAD2', '#FFFEFC'],
        secondary: ['#FF0000FF', '#FF2A2C', '#FF5458', '#FF7E82', '#FFA8AC', '#FFD2D5', '#FFFCFD',],
    },
});


