import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

export function MyApi() {
    const [msgValue, changeMsgValue] = useState('message')

    useLayoutEffect(() => {
        axios.get('/api/hello').then(res => {
            console.log(res);
            changeMsgValue(res.data);
        })
    }, []);

    return (
        <span>{msgValue}</span>
    );
}