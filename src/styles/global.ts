import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        backgroundColor: "$grayBackground900",
        color: "$grayText300",
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 400,

    }
})