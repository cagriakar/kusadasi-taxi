import { Fab } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import FloatingButton from '../src/components/FloatingButton';
import ScrollToTop from '../src/components/ScrollToTop';
import Footer from '../src/views/Footer/Footer';
import Header from '../src/views/Header/Header';

export default function Index() {
    return (
        <Box minHeight="100vh">
            <Header />
            {Array(15)
                .fill('x')
                .map((i, index) => (
                    <Typography
                        key={`${i}-${index}`}
                        variant="h4"
                        component="h1"
                        gutterBottom
                    >
                        Next.js example
                    </Typography>
                ))}
            {/* <Link href="/about" color="secondary">
                    Go to the about page
                </Link> */}
            <FloatingButton />
            <ScrollToTop>
                <Fab
                    color="primary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
            <Footer />
        </Box>
    );
}
