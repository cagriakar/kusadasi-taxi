import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            primary: {
                main: '#FABA32'
            },
            secondary: {
                main: '#19857b'
            }
        }
    })
);

export default theme;
