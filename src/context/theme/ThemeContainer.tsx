import { FC } from 'react'
import {
    ThemeProvider as ChakraThemeProvider,
    ColorModeProvider,
    CSSReset,
} from '@chakra-ui/react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import theme from '../../styles/theme'

const ThemeContainer: FC = ({ children }) => {
    return (
        <ChakraThemeProvider theme={theme}>
            <ColorModeProvider 
                options={{ 
                    initialColorMode: "light", 
                    useSystemColorMode: false 
                }}>
                <EmotionThemeProvider theme={theme}>
                    <CSSReset />

                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    )
}

export default ThemeContainer
