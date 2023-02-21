import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            purple: '#8257e6',

            white: '#fff',

            grayTitle100: '#e1e1e6',
            grayText300: '#c4c4cc',
            grayElements800: '#202024',
            grayBackground900: '#121214',

            greenLight300: '#00b37e',
            green500: '#00875f',
        }
    }
})