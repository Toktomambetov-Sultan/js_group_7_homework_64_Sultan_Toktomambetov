import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';
import NavigationItem from './Navigation/NavigationItem';
import { pagesInfo } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    Toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    list: {
        listStyle: "none",
        padding: "0",
        margin: "0",
    },
    logo: {
        fontSize: theme.spacing(4)
    }
}));

const Toolsbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar className={classes.Toolbar}>
                        <div className={classes.logo}>Static Pages</div>
                        <ul className={classes.list}>
                            {pagesInfo.map(page => (
                                <NavigationItem key={page.name} to={page.localUrl} exact>{page.name}</NavigationItem>
                            ))}
                            <NavigationItem to="/edit" exact>Edit page</NavigationItem>

                        </ul>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Toolsbar;
