import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Select, InputLabel, FormControl, CircularProgress } from '@material-ui/core';
import { useState } from 'react';
import { pagesInfo } from '../../constants';
import Button from '@material-ui/core/Button';
import OrderAxios from '../../OrderAxios';
import { useEffect } from 'react';
import { useCallback } from 'react';

const useStyles = makeStyles(theme => ({
    TextField: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    optgroup: {
        padding: theme.spacing(1),
    },
    loading: {
        display: "block",
        width: "100px",
        margin: "0 auto"
    }
}));

const Edit = (props) => {
    const classes = useStyles();
    const [data, setData] = useState({ index: 0 });
    const [loading, setLoading] = useState(false);

    const initData = async (index) => {
        setLoading(true);
        const response = await OrderAxios.get(pagesInfo[index].globalUrl + ".json");
        setLoading(false);
        setData(data => ({ ...data, ...response.data }));
    };

    const initDataCallback = useCallback(initData, []);

    useEffect(() => {
        initDataCallback(0);
        console.log("unmount");
    }, [initDataCallback]);

    const formChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        console.log(data);
        setData({
            ...data,
            [name]: value
        });
        if (name === 'index') {
            initData(value);
        }
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(pagesInfo[data.index - 1]);
        await OrderAxios.put(pagesInfo[data.index].globalUrl + ".json", {
            url: data.url,
            content: data.content
        });
        setLoading(false);
        props.history.push({
            pathname: pagesInfo[data.index].localUrl
        });
    };

    return loading ? (<CircularProgress className={classes.loading} color="secondary" />) : (
        <div>
            <form onChange={formChange} onSubmit={(e) => formSubmit(e).catch(console.error)}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="page-name">Page: </InputLabel>
                    <Select name="index" native value={data.index} id="page-name">
                        <optgroup className={classes.optgroup}>
                            {pagesInfo.map((page, index) => (
                                <option key={page.name} value={index}>{page.name}</option>
                            ))}
                        </optgroup>
                    </Select>
                </FormControl>
                <TextField
                    className={classes.TextField}
                    placeholder="Write here"
                    fullWidth
                    multiline
                    margin="normal"
                    name="content"
                    rows={6}
                    value={data.content}
                    variant="outlined"
                    autoFocus
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Edit;
