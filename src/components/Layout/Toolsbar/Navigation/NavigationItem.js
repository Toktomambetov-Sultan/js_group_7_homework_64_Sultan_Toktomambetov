import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import "./NavigationItem.css";

const useStyles = makeStyles((theme) => ({
    navigationItem: {
        display: "inline-block",
        margin: theme.spacing(3)
    }
}));
const NavigationItem = ({ to, exact, children }) => {
    const classes = useStyles();
    return (
        <li className={classes.navigationItem}>
            <NavLink to={to} className="Navigation__link" exact={exact}>
                {children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
