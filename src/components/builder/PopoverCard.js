import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Typography, CardMedia, CardContent, Popover } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    content: {
        maxWidth: '400px',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        borderRadius: 10,
        marginLeft: '1.5%',
        display: 'flex',
        paddingLeft: '0.5%',
        overflow: 'hidden'
    },
}));

export default function PopoverCard(props) {
    const classes = useStyle();
    return (
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={Boolean(props.anchorPopover)}
            onClose={props.close}
            anchorEl={props.anchorPopover}
            anchorOrigin={{ vertical: 'center', horizontal: 'right'}}
            transformOrigin={{vertical: 'center', horizontal: 'left' }}
            disableRestoreFocus
        >
            <Card title={props.info.title} subtitle={props.info.subtitle} img={props.info.img}/>
        </Popover>
    );
}
PopoverCard.propTypes = {
    close: PropTypes.func.isRequired,
    anchorPopover: PropTypes.any,
    info: PropTypes.any.isRequired
}


const useStyleCard = makeStyles((theme) => ({
    details: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    cover: {
        display: 'flex',
        width: '100px',
        height: '100px',
    },
    content: {
        maxWidth: '400px',
    },
}));

function Card(props) {
    const classes = useStyleCard()
    return (
        <div className={classes.details}>
            <CardMedia
                className={classes.cover}
                image={props.img}
                title="Poly Image"
            />
            <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                    {props.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {props.subtitle}
                </Typography>
            </CardContent>
        </div>
    );
}