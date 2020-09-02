import React from 'react';
import { useState } from 'react';
import OrderAxios from '../../OrderAxios';
import { useEffect } from 'react';

const Page = (props) => {
    const [pageData, setPageData] = useState({});
    const initPageData = async () => {
        const params = new URLSearchParams({
            orderBy: "url",
            equalTo: props.match.params.page
        });
        const response = await OrderAxios.get("Pages.json?" + params.toString());
        console.log(response);
    };
    useEffect(() => {
        initPageData();
        console.log(1);
    }, []);
    console.log(1);
    return (
        <div>123</div>
    );
};

export default Page;

