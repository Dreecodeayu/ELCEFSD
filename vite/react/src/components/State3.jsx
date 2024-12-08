import React,{useEffect, userEffect} from 'react'

import { useState } from 'react';
function State3(){
    const[total, setTotal] = useState(0);
    const[double , setDouble] = useState(0);
    useEffect(()=>{
        setDouble(total * 2)
    }, [total])

    return (
        <div>
            <button onClick = {() => {setTotal(total + 1)}}>INC</button>
            <button onClick={()=>{setTotal(total - 1)}}>DEC</button>
            <h2>{total}</h2>
            <h3>{double}</h3>
        </div>
    )
}
export default State3