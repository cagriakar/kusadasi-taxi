import { Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(2.5)
    }
}));

export default function ScrollToTop({ children }) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    function handleClick() {
        const anchor = document.querySelector('#back-to-top-anchor');

        return (
            anchor &&
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        );
    }

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.root}
            >
                {children}
            </div>
        </Zoom>
    );
}
