import { AppBar, Box, Link, Toolbar, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import clsx from 'clsx';
import React from 'react';
import { companyName, phoneNumber } from '../../assets/constants';

const useStyles = makeStyles((theme) => ({
    appBar: { backgroundColor: theme.palette.grey['900'] },
    root: { display: 'flex', justifyContent: 'space-between' },
    flex: { flexGrow: 1 },
    elevationOn: {
        boxShadow: theme.shadows[3]
    },
    elevationOff: {
        boxShadow: theme.shadows[10]
    },
    normalHeight: {
        height: '12vh'
    },
    lowHeight: { height: '8vh' },
    marginLeft: { marginLeft: theme.spacing(1) }
}));

export default function Header() {
    const theme = useTheme();
    const matchesUptoSM = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(
                    trigger ? classes.elevationOff : classes.elevationOn,
                    classes.appBar
                )}
            >
                <Toolbar
                    variant={trigger ? 'dense' : 'regular'}
                    className={classes.root}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        className={classes.flex}
                        color="primary"
                    >
                        {companyName}
                    </Typography>

                    <Link
                        underline="none"
                        color="inherit"
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={5}
                        >
                            <WhatsAppIcon
                                fontSize="large"
                                style={{ color: green[500] }}
                            />

                            {matchesUptoSM && (
                                <Typography
                                    className={classes.marginLeft}
                                    variant="h5"
                                    component="h1"
                                    color="primary"
                                >
                                    {`+${phoneNumber}`}
                                </Typography>
                            )}
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
            <Toolbar
                variant={trigger ? 'dense' : 'regular'}
                id="back-to-top-anchor"
            />
        </>
    );
}
