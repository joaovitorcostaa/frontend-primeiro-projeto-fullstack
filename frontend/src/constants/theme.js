import { createTheme } from '@material-ui/core/styles'
import { secondaryColor, primaryColor } from './colors'

export const theme = createTheme({
    spacing: 8,
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
})