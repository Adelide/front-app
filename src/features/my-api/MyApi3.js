import React from "react";
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { myApiAsync, selectMsg } from "./myApi3Slice";

export function MyApi3() {
    const msg = useSelector(selectMsg);
    const dispatch = useDispatch();
    return (
        <div>
            <span>{msg}</span>
            <Button type="primary" size="default" onClick={() => dispatch(myApiAsync())}>
                Hello
            </Button>
    </div>
    );
}