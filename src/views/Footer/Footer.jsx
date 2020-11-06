import { Box, Grid, IconButton, Link, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import { companyName, email } from '../../assets/constants';
import createHref from '../../helpers/createHref';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey['900'],
        minHeight: '15vh'
    }
}));

export default function Footer() {
    const classes = useStyles();
    const { spacing } = useTheme();
    return (
        <Box
            className={classes.root}
            py={spacing(0.5)}
            display="flex"
            alignItems="center"
            component="footer"
        >
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={12} md={4}>
                    <Typography variant="body2" align="center" color="primary">
                        {`Copyright © ${companyName}, ${new Date().getFullYear()}`}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        py={spacing(0.2)}
                    >
                        <IconButton aria-label="facebook" color="primary">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="twitter" color="primary">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="instagram" color="primary">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="youtube" color="primary">
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item container xs={12} md={4} justify="center">
                    <Link
                        variant="body2"
                        align="center"
                        color="primary"
                        component="a"
                        underline="none"
                        href={createHref('email')}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {email}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
