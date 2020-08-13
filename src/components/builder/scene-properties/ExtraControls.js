import React from "react"

import Grid from "@material-ui/core/Grid"
import Switch from "@material-ui/core/Switch"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import { connect } from "react-redux"
import { updateScene } from "../../../redux/actions.js"

const useStyles = makeStyles(({
    root: {
        marginTop: "2%",
        marginLeft: "0px",
        paddingLeft: "0px",
        marginBottom: "2%",
    },
    inputfield: {
        width: "100%",
        color: "#eeeeee",
        marginLeft: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        "& label.Mui-focused": {
            color: "white",
        },
        "& label": {
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#616161",
                borderRadius: 2
            },
            "&:hover fieldset": {
                borderColor: "white",
                borderWidth: "1px"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
                borderWidth: "1px",
            },
        },
    },
}))

const ExtraControls = ({ sceneReducer, updateScene }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={3}>
                <Typography>
                    Sky:
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Switch
                    value={sceneReducer.sky}
                    size="small"
                    checked={sceneReducer.sky}
                    color="secondary"
                    onChange={() => updateScene({ ...sceneReducer, sky: !sceneReducer.sky })}
                    style={{ float: 'right', alignContent: 'right' }}
                />
            </Grid>
            <Grid item xs={3}>
                <Typography>
                    Stars:
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Switch
                    value={sceneReducer.stars}
                    size="small"
                    checked={sceneReducer.stars}
                    color="secondary"
                    onChange={() => updateScene({ ...sceneReducer, stars: !sceneReducer.stars })}
                    style={{ float: 'right', alignContent: 'right' }}
                />
            </Grid>
        </Grid>
    )
}
const mapStateToProps = state => ({
    sceneReducer: state.sceneReducer
})

const mapDispatchToProps = dispatch => ({
    updateScene: newScene => dispatch(updateScene(newScene))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExtraControls)