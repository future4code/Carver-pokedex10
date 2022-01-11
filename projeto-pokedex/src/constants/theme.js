import { createTheme } from '@mui/material/styles'
import { primaryColor, neutraColor } from './color'

const theme = createTheme({
 palette: {
  primary: {
   main: primaryColor,
   contrastText: 'white',

  },
  text: {
   primary: neutraColor
  },
  secondary: {
   main: '#ffff'

  }
 }
})
export default theme;