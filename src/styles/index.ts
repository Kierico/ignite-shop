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

            upGradient: '#1ea483',
            downGradient: '#7465d4',
        },

        fontSizes: {
            md: '1.125rem', // 18px
            lg: '1.25rem', // 20px
            xl: '1.5rem', // 24px
            '2xl': '2rem', // 32px
        },
    }
})