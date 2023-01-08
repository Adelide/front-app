import React, { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";

async function queryApi() {
    const res = await axios.get('/api/hello');
    return res;
}

export function MyApi() {
    const [msgValue, changeMsgValue] = useState('message')

    useLayoutEffect(() => {
        queryApi().then(res => {
            console.log(res);
            changeMsgValue(res.data);
        });
        console.log("after");
    }, []);

    return (
        <span>{msgValue}</span>
    );
}