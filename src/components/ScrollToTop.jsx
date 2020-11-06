import { useMediaQuery, Zoom } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(2.5)
    },
    root2: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(3)
    }
}));

export default function ScrollToTop({ children }) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });
    const theme = useTheme();
    const matchesUptoSM = useMediaQuery(theme.breakpoints.up('sm'));

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
                className={matchesUptoSM ? classes.root2 : classes.root}
            >
                {children}
            </div>
        </Zoom>
    );
}
