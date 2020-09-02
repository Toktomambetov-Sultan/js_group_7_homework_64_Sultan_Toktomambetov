import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import NavigationItem from './Navigation/NavigationItem';

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
                            <NavigationItem to="/pages/home" exact>Home</NavigationItem>
                            <NavigationItem to="/pages/about" exact>About</NavigationItem>
                            <NavigationItem to="/pages/divisions" exact>Divisions</NavigationItem>
                            <NavigationItem to="/pages/contacts" exact>Contacts</NavigationItem>
                            <NavigationItem to="/edit" exact>Edit Page</NavigationItem>
                        </ul>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Toolsbar;
