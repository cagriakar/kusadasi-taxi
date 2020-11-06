import { Container, Grid } from '@material-ui/core';
import React from 'react';
import prices from '../../../../assets/prices';
import PriceCard from './PriceCard/PriceCard';

export default function PriceList() {
    return (
        <Container>
            <Grid container justify="center" align="center" spacing={4}>
                {prices.map((price) => (
                    <Grid item key={price.to}>
                        <PriceCard price={price} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
