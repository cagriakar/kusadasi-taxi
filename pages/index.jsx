import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Copyright from '../src/Copyright';
import ProTip from '../src/ProTip';

export default function Index() {
    return (
        <Box minHeight="100vh">
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
            ></Grid>
            <Typography variant="h4" component="h1" gutterBottom>
                Next.js example
            </Typography>
            {/* <Link href="/about" color="secondary">
                    Go to the about page
                </Link> */}
            <ProTip />
            <Copyright />
        </Box>
    );
}
