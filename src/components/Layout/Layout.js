import React from 'react';
import Toolsbar from './Toolsbar/Toolsbar';
import { Container } from '@material-ui/core';

const Layout = (props) => {
    return (
        <>
            <header><Toolsbar /></header>
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
        </>
    );
};

export default Layout;
