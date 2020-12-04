import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#9932CC"
        },
        secondary: {
            main: "#ffffff"
        },
        error: {
            main: "#f54029"
        }
    },
    typography: {
        fontFamily: 'Balsamiq Sans, Roboto'
    },
    overrides: {
        MuiTextField: {
            root: {
                margin: 5
            }
        }
    },
    status: {
        danger: "orange",
    },
})

export default theme