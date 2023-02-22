import { styled } from "..";

export const ProductContainer = styled('main', {
    display: "grid",
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: "stretch",
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, $upGradient 0%, $downGradient 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        objectFit: "cover",
    }
})

export const ProductDetails = styled('div', {
    display: "flex",
    flexDirection: "column",

    h1: {
        fontSize: '$2xl',
        color: '$grayText300',
    },

    span: {
        marginTop: '1rem',
        display: "block",
        fontSize: '$2xl',
        color: '$greenLight300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$grayText300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.5rem',
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: '$md',

        '&:hover': {
            backgroundColor: '$greenLight300',
        }
    }
})