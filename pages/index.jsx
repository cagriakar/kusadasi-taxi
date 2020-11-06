import { Fab } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import FloatingButton from '../src/components/FloatingButton';
import ScrollToTop from '../src/components/ScrollToTop';
import Footer from '../src/views/Footer/Footer';
import Header from '../src/views/Header/Header';
import MainView from '../src/views/MainView/MainView';

export default function Index() {
    return (
        <Box minHeight="100vh">
            <Header />
            <MainView />
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
