import { theme } from '@chakra-ui/react'

const customTheme = {
    ...theme,
    fonts: {
        body: `'Open Sans', system-ui, sans-serif`,
        heading: `'Open Sans', system-ui, sans-serif`,
        handwriting: `'Shadows Into Light', system-ui, sans-serif`
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 800,
    },
}

export default customTheme