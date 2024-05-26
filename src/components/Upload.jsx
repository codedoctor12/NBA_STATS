import React from 'react'
import Papa from 'papaparse'
import {useState, useEffect, useRef } from 'react'
export default function Upload()
{
    const [data,setData] = useState([])
    const [columnArray,setColumn] = useState([])
    const [values,setValues] = useState([])

    const handleFile = (event) => {
        Papa.parse(event.target.files[0],{
            header:true,
            skipEmptyLines:true,
            complete: function(result){
                const columnArray = [];
                const valueArray = [];

                result.data.map((d)=>{
                    columnArray.push(Object.keys(d))
                    valueArray.push(Object.values(d))
                });
                setData(result.data)
                setColumn(columnArray[0])
                setValues(valueArray)
                console.log(valueArray);
                // console.log(data);

            }
        })
    }
    return(
        <div>
            <input
            type="file"
            name="file"
            accept=".csv"
            onChange={handleFile}
            style={{display:'block',marge:'10px auto'}}>

            </input>
        </div>
    )
}