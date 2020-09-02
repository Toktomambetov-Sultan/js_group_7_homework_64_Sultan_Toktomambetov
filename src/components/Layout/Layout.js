import React from 'react';
import Toolsbar from './Toolsbar/Toolsbar';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(2),
        fontSize: theme.spacing(4),
    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <header><Toolsbar /></header>
            <main className={classes.main}>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    );
};

export default Layout;
