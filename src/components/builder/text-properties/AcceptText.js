import React, { useState } from "react"
import { Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { addMesh } from "../../../redux/actions"
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1%',
        marginBottom: '0.5%',
        marginLeft: '0px',
        paddingLeft: '0px'
    },
    inputfield: {
        width: '100%',
        color: '#eeeeee',
        marginLeft: '0px',
        paddingLeft: '0px',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#616161',
                borderRadius: 2
            },
            '&:hover fieldset': {
                borderColor: 'white',
                borderWidth: '1px'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                borderWidth: '1px',
            },
        },
    },
}))

const AcceptText = ({ addText }) => {
    const classes = useStyles();
    const [inputText, setInputText] = useState("")

    const handleOnAddText = () => {
        addText(inputText)
        setInputText("")
    }

    return (
        <>
            <TextField value={inputText} label="Insert Text" onChange={e => setInputText(e.target.value)} placeholder="Insert Text" className={classes.inputfield} type="text" id="outlined-basic" variant="outlined" size="small" InputProps={{ className: classes.inputfield }} />
            <Button fullWidth onClick={handleOnAddText} variant="outlined" color="primary"> ADD Text</Button>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addText: newText => dispatch(addMesh("Text", newText)),
})

export default connect(null, mapDispatchToProps)(AcceptText)