import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementWithValue, selectCount } from './myCounterSlice'

export function MyCounter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [amountInLocalState, methodToSetLocalState] = useState('2');
    const incrementNumber = Number(amountInLocalState) || 0;
    return (
        <div>
            <span>{count}</span>
            <Button type="primary" size="default" onClick={() => dispatch(increment())}>
                +1
            </Button>
            <Input 
                placeholder="Basic usage" 
                value={incrementNumber}
                onChange={(e) => methodToSetLocalState(e.target.value)} />
            <Button type="primary" size="default" onClick={() => dispatch(incrementWithValue(incrementNumber))}>
                +输入数字个
            </Button>
        </div>
    );
}