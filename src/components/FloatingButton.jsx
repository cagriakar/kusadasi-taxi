import {
    Box,
    ClickAwayListener,
    Fab,
    Grid,
    Tooltip,
    Zoom
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import TextsmsIcon from '@material-ui/icons/Textsms';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React, { useState } from 'react';
import createHref from '../helpers/createHref';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(20),
        right: theme.spacing(2)
    }
}));

export default function FloatingButton() {
    const classes = useStyles();
    const theme = useTheme();

    const [isExpanded, setIsExpanded] = useState(false);

    const matchesUptoSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box className={classes.root} component="div">
            <ClickAwayListener onClickAway={() => setIsExpanded(false)}>
                <Grid
                    container
                    direction="column-reverse"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Tooltip title="Contact us" placement="left">
                            <Fab
                                color="primary"
                                size={matchesUptoSM ? 'large' : 'medium'}
                                aria-label="contact us"
                                onClick={() =>
                                    setIsExpanded((prevValue) => !prevValue)
                                }
                            >
                                <CallIcon />
                            </Fab>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="via WhatsApp" placement="left">
                            <Zoom in={isExpanded}>
                                <Fab
                                    color="primary"
                                    size="small"
                                    aria-label="contact via whatsApp"
                                    component="a"
                                    href={createHref('whatsApp')}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <WhatsAppIcon />
                                </Fab>
                            </Zoom>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="via SMS" placement="left">
                            <Zoom in={isExpanded}>
                                <Fab
                                    color="primary"
                                    size="small"
                                    aria-label="contact us via sms"
                                    component="a"
                                    href={createHref('sms')}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TextsmsIcon />
                                </Fab>
                            </Zoom>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="via Mail" placement="left">
                            <Zoom in={isExpanded}>
                                <Fab
                                    color="primary"
                                    size="small"
                                    aria-label="contact us via mail"
                                    component="a"
                                    href={createHref('email')}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MailIcon />
                                </Fab>
                            </Zoom>
                        </Tooltip>
                    </Grid>
                </Grid>
            </ClickAwayListener>
        </Box>
    );
}
