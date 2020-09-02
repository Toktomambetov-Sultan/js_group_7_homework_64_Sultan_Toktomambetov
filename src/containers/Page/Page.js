import React from 'react';
import { useState } from 'react';
import OrderAxios from '../../OrderAxios';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Page = (props) => {
    const [pageData, setPageData] = useState({});
    const initPageData = useCallback(
        async () => {
            const params = new URLSearchParams({
                orderBy: '"url"',
                equalTo: '"' + props.match.params.page + '"'
            });
            const response = await OrderAxios.get("Pages.json?" + params.toString());
            setPageData(
                Object.values(response.data)[0]
            );
        }, [props.match.params.page]);
    useEffect(() => {
        initPageData().catch(console.error);
        console.log("unmount");
    }, [initPageData]);
    return (
        <div>{pageData.content}</div>
    );
};

export default Page;

