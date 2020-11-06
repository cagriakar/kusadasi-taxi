import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { companyName } from '../../assets/constants';
import PriceList from './Sections/PriceList/PriceList';

export default function MainView() {
    return (
        <Box pt={2} pb={4}>
            <Box pt={2} pb={3}>
                <Container>
                    <Typography variant="h4" component="h2" align="center">
                        {companyName} Price List
                    </Typography>
                    <Typography variant="h6" component="h3" align="center">
                        -- One Way Price List --
                    </Typography>
                </Container>
            </Box>
            <PriceList />
        </Box>
    );
}
